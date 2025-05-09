import { Component, HostListener, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef, Input, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { DataService } from '../../app/data.service';

declare let hljs: any;
type ViewMode = 'desktop' | 'tablet' | 'mobile';
const TABLET_WIDTH_THRESHOLD = 996;

@Component({
    selector: 'app-demo',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './demo.component.html',
    styleUrl: './demo.component.css'
})
export class DemoComponent implements OnInit, AfterViewInit, OnDestroy {
    @Input() public blockName: string = '';
    @Input() public blockUrl: string = '';
    @ViewChild('previewBlock') public previewBlock!: ElementRef;
    @ViewChild('previewSourceCode') public previewSourceCode!: ElementRef;
    @ViewChild('copyClipboardTooltip') public copyClipboardTooltip!: ElementRef;
    @ViewChild('copyButton') public copyButton!: ElementRef;
    @ViewChild('themeDropdownContent') public themeDropdownContent!: ElementRef;
    @ViewChild('cssTab') public cssTab!: ElementRef;

    public isDarkMode: boolean = false;
    public isPreviewMode: boolean = true;
    public iframeURL: SafeResourceUrl = '';
    public htmlContent: string = '';
    public cssContent: string = '';
    public typescriptContent: string = '';
    public themeIndex: number = 0;
    public previewStyle: { minWidth: string } = { minWidth: '100%' };
    public showLoadingIndicator: boolean = true;
    public currentView: ViewMode = 'desktop';
    public isDropdownOpen = false;

    private linkElement!: HTMLLinkElement;
    private scriptElement!: HTMLScriptElement;
    private theme: string = 'tailwind';
    private currentTab: string = 'html';

    private widths: Record<ViewMode, string> = {
        desktop: '100%',
        tablet: '48rem',
        mobile: '22.5rem',
    };

    constructor(private sanitizer: DomSanitizer, private renderer: Renderer2, private dataService: DataService, private http: HttpClient) {
        this.theme = (window as any).currentTheme || 'tailwind';
    }

    public ngOnInit(): void {
        this.iframeURL = this.sanitizer.bypassSecurityTrustResourceUrl(`./` + `#/blocks/${this.blockUrl}`);

        if (!document.querySelector('link[href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/github.min.css"]')) {
            this.linkElement = document.createElement('link');
            this.linkElement.rel = 'stylesheet';
            this.linkElement.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/github.min.css';
            document.head.appendChild(this.linkElement);
        }

        if (!document.querySelector('script[src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/highlight.min.js"]')) {
            this.scriptElement = document.createElement('script');
            this.scriptElement.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/highlight.min.js';
            this.scriptElement.async = true;
            document.body.appendChild(this.scriptElement);
        }
    }

    public ngAfterViewInit(): void {
        const iframeElement = this.previewBlock.nativeElement;
        iframeElement.onload = () => this.updateTheme();
    }

    public ngOnDestroy(): void {
        if (this.linkElement) {
            document.head.removeChild(this.linkElement);
        }
        if (this.scriptElement) {
            document.body.removeChild(this.scriptElement);
        }
        const iframeElement = this.previewBlock.nativeElement;
        iframeElement.onload = null;
    }

    @HostListener('window:resize', ['$event'])
    public onWindowReSize(): void {
        if (this.currentView === 'tablet' && window.innerWidth <= TABLET_WIDTH_THRESHOLD) {
            this.previewStyle.minWidth = '100%';
        }
        setTimeout(() => {
            this.updateIframeHeight();
        }, 100);
    }

    public switchMode(mode: ViewMode): void {
        this.currentView = mode;
        this.previewStyle.minWidth =
            mode !== 'tablet'
                ? this.widths[mode]
                : window.innerWidth > TABLET_WIDTH_THRESHOLD
                    ? this.widths[mode]
                    : '100%';
        setTimeout(() => {
            this.updateIframeHeight();
        }, 100);
    }

    public toggleDropdown(args?: string): void {
        const dropdownContent = this.themeDropdownContent.nativeElement;
        if (dropdownContent) {
            dropdownContent.style.display = args === 'hide' ? 'none' : dropdownContent.style.display === 'block' ? 'none' : 'block';
            this.isDropdownOpen = dropdownContent.style.display === 'block' ? true : false;
        }
    }

    public onThemeChange(event: Event): void {
        const theme = (event.target as HTMLElement)?.getAttribute('data-value');
        if (theme !== this.theme) {
            this.showLoadingIndicator = true;
            this.theme = theme || this.theme;
            this.dataService.setThemeName(this.theme);
            const iframeElement = this.previewBlock.nativeElement;
            this.updateTheme();
            iframeElement.contentWindow.postMessage('{"name":"' + this.blockName + '","theme":"' + this.theme + '"}', '*');
        }
        this.toggleDropdown('hide');
    }

    public toggleLightDarkModes(): void {
        this.showLoadingIndicator = true;
        this.isDarkMode = !this.isDarkMode;
        this.updateTheme();
    }

    public togglePreviewCode(event: Event): void {
        const targetElement = event.target as HTMLElement;
        this.isPreviewMode = targetElement.getAttribute('tab-text') === 'Preview';
        if (!this.isPreviewMode) {
            this.showSourceCode();
        } else {
            this.showPreview();
        }
    }

    public showTab(tabId: string): void {
        const contents: HTMLElement[] = this.previewSourceCode.nativeElement.querySelectorAll('.tab-content');
        contents.forEach((content: HTMLElement) => {
            content.classList.remove('active');
        });
        const tabs = this.previewSourceCode.nativeElement.querySelectorAll('.tab');
        tabs.forEach((tab: HTMLElement) => {
            tab.classList.remove('active');
        });
        const selectedTabContent = this.previewSourceCode.nativeElement.querySelector('#' + tabId);
        selectedTabContent?.classList.add('active');
        const selectedTab = this.previewSourceCode.nativeElement.querySelector('.' + (tabId === 'html' ? 'html-tab' : tabId === 'css' ? 'css-tab' : 'typescript-tab'));
        selectedTab?.classList.add('active');
        this.currentTab = tabId;
    }

    public copyCode(): void {
        const codeElement = document.createElement('textarea');
        codeElement.value = this.currentTab === 'html' ? this.htmlContent : this.currentTab === 'css' ? this.cssContent : this.typescriptContent;
        document.body.appendChild(codeElement);
        codeElement.select();
        navigator.clipboard.writeText(codeElement.value).then(() => {
            this.showTooltip();
        }).catch((error) => {
            console.error('Error copying text: ', error);
        });
        document.body.removeChild(codeElement);
    }

    private showTooltip(): void {
        const tooltipElement = this.copyClipboardTooltip.nativeElement;
        const buttonRect = this.copyButton.nativeElement.getBoundingClientRect();
        tooltipElement.style.top = `${buttonRect.bottom + window.scrollY + 5}px`;
        tooltipElement.style.left = `${buttonRect.left + window.scrollX - 40}px`;
        tooltipElement.classList.add('show');
        setTimeout(() => {
            tooltipElement.classList.remove('show');
        }, 2000);
    }

    private updateIframeHeight(): void {
        const iframeElement = this.previewBlock.nativeElement;
        const iframeDocument = iframeElement.contentDocument || iframeElement.contentWindow.document;
        const contentHeight = iframeDocument.body.scrollHeight !== 0 ? iframeDocument.body.scrollHeight : iframeDocument.documentElement.scrollHeight;
        iframeElement.style.height = `${contentHeight + 1}px`;
        this.showLoadingIndicator = false;
    }

    private addStyleSheetToIframe(iframeDocument: Document, syncfusionStyleUrl: string, frameworkStyleUrl: string, frameworkSupportStyleUrl: string, fontIconsUrl: string): void {
        if (iframeDocument) {
            const loadPromises: Promise<void>[] = [];

            const syncfusionStyleLinkElement = this.renderer.createElement('link');
            this.renderer.setAttribute(syncfusionStyleLinkElement, 'rel', 'stylesheet');
            this.renderer.setAttribute(syncfusionStyleLinkElement, 'id', 'syncfusion-style');
            this.renderer.setAttribute(syncfusionStyleLinkElement, 'href', `${syncfusionStyleUrl}?v=${Math.floor(Math.random() * 999999)}`);
            this.renderer.appendChild(iframeDocument.head, syncfusionStyleLinkElement);

            loadPromises.push(new Promise<void>((resolve, reject) => {
                syncfusionStyleLinkElement.addEventListener('load', () => resolve(), { once: true });
                syncfusionStyleLinkElement.addEventListener('error', () => reject(new Error(`Failed to load stylesheet: ${syncfusionStyleLinkElement.href}`)), { once: true });
            }));

            const fontIconsStyleElement = this.renderer.createElement('link');
            this.renderer.setAttribute(fontIconsStyleElement, 'rel', 'stylesheet');
            this.renderer.setAttribute(fontIconsStyleElement, 'id', 'font-icons');
            this.renderer.setAttribute(fontIconsStyleElement, 'href', `${fontIconsUrl}?v=${Math.floor(Math.random() * 999999)}`);
            this.renderer.appendChild(iframeDocument.head, fontIconsStyleElement);

            loadPromises.push(new Promise<void>((resolve, reject) => {
                fontIconsStyleElement.addEventListener('load', () => resolve(), { once: true });
                fontIconsStyleElement.addEventListener('error', () => reject(new Error(`Failed to load stylesheet: ${fontIconsStyleElement.href}`)), { once: true });
            }));

            const frameworkStyleElement = this.renderer.createElement('link');
            this.renderer.setAttribute(frameworkStyleElement, 'rel', 'stylesheet');
            this.renderer.setAttribute(frameworkStyleElement, 'id', 'framework-style');
            this.renderer.setAttribute(frameworkStyleElement, 'href', `${frameworkStyleUrl}?v=${Math.floor(Math.random() * 999999)}`);
            this.renderer.appendChild(iframeDocument.head, frameworkStyleElement);

            loadPromises.push(new Promise<void>((resolve, reject) => {
                frameworkStyleElement.addEventListener('load', () => resolve(), { once: true });
                frameworkStyleElement.addEventListener('error', () => reject(new Error(`Failed to load stylesheet: ${frameworkStyleElement.href}`)), { once: true });
            }));

            if (frameworkSupportStyleUrl !== '') {
                const frameworkSupportStyleElement = this.renderer.createElement('link');
                this.renderer.setAttribute(frameworkSupportStyleElement, 'rel', 'stylesheet');
                this.renderer.setAttribute(frameworkSupportStyleElement, 'id', 'framework-support-style');
                this.renderer.setAttribute(frameworkSupportStyleElement, 'href', `${frameworkSupportStyleUrl}?v=${Math.floor(Math.random() * 999999)}`);
                this.renderer.appendChild(iframeDocument.head, frameworkSupportStyleElement);

                loadPromises.push(new Promise<void>((resolve, reject) => {
                    frameworkSupportStyleElement.addEventListener('load', () => resolve(), { once: true });
                    frameworkSupportStyleElement.addEventListener('error', () => reject(new Error(`Failed to load stylesheet: ${frameworkSupportStyleElement.href}`)), { once: true });
                }));
            }

            Promise.all(loadPromises)
                .then(() => {
                    setTimeout(() => {
                        this.updateIframeHeight();
                    }, 200);
                })
                .catch((error) => {
                    console.error('Error loading stylesheets: ', error);
                });
        }
    }

    private updateTheme(): void {
        const iframeElement = this.previewBlock.nativeElement;
        const iframeDocument: Document = iframeElement.contentDocument || iframeElement.contentWindow.document;
        const themeName = this.isDarkMode ? `${this.theme}-dark` : `${this.theme}-light`;
        const stylesheetLinks = iframeDocument.head.getElementsByTagName('link');
        let frameworkStyleUrl: string, frameworkSupportStyleUrl: string, syncfusionStyleUrl: string, fontIconsUrl: string;

        iframeDocument.documentElement.removeAttribute('data-bs-theme');
        iframeDocument.documentElement.classList.remove('dark', 'light');

        Array.from(stylesheetLinks).forEach((linkElement: HTMLLinkElement) => {
            if (!linkElement.href.includes('styles.css') && linkElement.rel === 'stylesheet') {
                iframeDocument.head.removeChild(linkElement);
            }
        });

        switch (themeName) {
            case 'tailwind-light':
                syncfusionStyleUrl = 'https://cdn.syncfusion.com/ej2/29.1.38/tailwind.css';
                frameworkStyleUrl = 'assets/themes/tailwind/tailwind.css';
                frameworkSupportStyleUrl = 'assets/themes/tailwind/indigo.css';
                fontIconsUrl = 'assets/font-icons/tailwind/tailwind-icons.css';
                iframeDocument.documentElement.classList.add('light');
                this.themeIndex = 0;
                break;
            case 'tailwind-dark':
                syncfusionStyleUrl = 'https://cdn.syncfusion.com/ej2/29.1.38/tailwind-dark.css';
                frameworkStyleUrl = 'assets/themes/tailwind/tailwind.css';
                frameworkSupportStyleUrl = 'assets/themes/tailwind/cyan.css';
                fontIconsUrl = 'assets/font-icons/tailwind/tailwind-icons.css';
                iframeDocument.documentElement.classList.add('dark');
                this.themeIndex = 0;
                break;
            case 'bootstrap5.3-light':
                frameworkStyleUrl = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
                frameworkSupportStyleUrl = '';
                syncfusionStyleUrl = 'https://cdn.syncfusion.com/ej2/29.1.38/bootstrap5.3.css';
                fontIconsUrl = 'assets/font-icons/bootstrap5_3/bootstrap5_3-icons.css';
                iframeDocument.documentElement.setAttribute('data-bs-theme', 'light');
                this.themeIndex = 1;
                break;
            case 'bootstrap5.3-dark':
                frameworkStyleUrl = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
                frameworkSupportStyleUrl = '';
                syncfusionStyleUrl = 'https://cdn.syncfusion.com/ej2/29.1.38/bootstrap5.3-dark.css';
                fontIconsUrl = 'assets/font-icons/bootstrap5_3/bootstrap5_3-icons.css';
                iframeDocument.documentElement.setAttribute('data-bs-theme', 'dark');
                this.themeIndex = 1;
                break;
            default:
                syncfusionStyleUrl = 'https://cdn.syncfusion.com/ej2/29.1.38/tailwind.css';
                frameworkStyleUrl = 'assets/themes/tailwind/tailwind.css';
                frameworkSupportStyleUrl = 'assets/themes/tailwind/indigo.css';
                fontIconsUrl = 'assets/font-icons/tailwind/tailwind-icons.css';
                iframeDocument.documentElement.classList.add('light');
                this.themeIndex = 0;
                break;
        }
        this.addStyleSheetToIframe(iframeDocument, syncfusionStyleUrl, frameworkStyleUrl, frameworkSupportStyleUrl, fontIconsUrl);
    }

    private showSourceCode(): void {
        this.http.get(`assets/code-snippet/html/${this.blockName}.component.html`, { responseType: 'text' })
            .pipe(
                tap((response: string) => {
                    this.htmlContent = response;
                    this.htmlContent = this.extractSectionContent(this.htmlContent, this.dataService.getThemeName());
                    const codeBlock = document.getElementById(`${this.blockName}_html-code`);
                    if (codeBlock) {
                        codeBlock.textContent = this.htmlContent;
                        hljs.highlightElement(codeBlock);
                    }
                }),
                catchError((error: any) => {
                    this.htmlContent = 'No content available !!!';
                    console.error('Error fetching HTML content: ', error);
                    return of(null);
                })
            )
            .subscribe();

        this.http.get(`assets/code-snippet/css/${this.blockName}.component.css`, { responseType: 'text' })
            .pipe(
                tap((response: string) => {
                    if (response.trim() !== '') {
                        this.cssTab.nativeElement.style.display = 'block';
                        this.cssContent = response;
                        const codeBlock = document.getElementById(`${this.blockName}_css-code`);
                        if (codeBlock) {
                            codeBlock.textContent = this.cssContent;
                            hljs.highlightElement(codeBlock);
                        }
                    }
                }),
                catchError((error: any) => {
                    this.cssContent = 'No content available !!!';
                    console.error('Error fetching CSS content: ', error);
                    return of(null);
                })
            )
            .subscribe();

        this.http.get(`assets/code-snippet/ts/${this.blockName}.component.ts`, { responseType: 'text' })
            .pipe(
                tap((response: string) => {
                    this.typescriptContent = response;
                    const codeBlock = document.getElementById(`${this.blockName}_ts-code`);
                    if (codeBlock) {
                        codeBlock.textContent = this.typescriptContent;
                        hljs.highlightElement(codeBlock);
                    }
                }),
                catchError((error: any) => {
                    this.typescriptContent = 'No content available !!!';
                    console.error('Error fetching TypeScript content: ', error);
                    return of(null);
                })
            )
            .subscribe();

        this.previewBlock.nativeElement.parentElement.style.display = 'none';
        this.previewSourceCode.nativeElement.style.display = 'block';
    }

    private extractSectionContent(htmlString: string, currentTheme: string): string {
        const patterns: { [key: string]: RegExp } = {
            'tailwind': /@if \(currentTheme === 'tailwind'\)\s*\{([\s\S]*?)<\/section>/,
            'bootstrap5.3': /@else if \(currentTheme === 'bootstrap5.3'\)\s*\{([\s\S]*?)<\/section>/,
        };

        const pattern = patterns[currentTheme];
        if (!pattern) {
            return "An invalid theme name has been provided.";
        }

        const match = htmlString.match(pattern);
        if (match) {
            return `${match[1].trimStart()}</section>`;
        }

        return "An error occurred while parsing the HTML code.";
    }

    private showPreview(): void {
        this.previewBlock.nativeElement.parentElement.style.display = '';
        this.previewSourceCode.nativeElement.style.display = 'none';
    }
}