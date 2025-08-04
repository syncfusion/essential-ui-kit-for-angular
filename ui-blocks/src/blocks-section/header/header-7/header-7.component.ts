import { Component, OnInit, OnDestroy, HostListener, ViewChild } from '@angular/core';
import { BreadcrumbModule, BreadcrumbOverflowMode, BreadcrumbComponent } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-header-7',
    standalone: true,
    imports: [BreadcrumbModule, ButtonModule],
    templateUrl: './header-7.component.html',
    styleUrl: './header-7.component.css'
})
export class Header7Component implements OnInit, OnDestroy {
    @ViewChild('breadcrumb') breadcrumb!: BreadcrumbComponent;
    public overflowMode: BreadcrumbOverflowMode = BreadcrumbOverflowMode.None;
    public width!: string;
    public maxItems: number = 2;
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */

    constructor() { }

    public ngOnInit(): void {
        /* SB Code - Start */
        window.addEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    public ngOnDestroy(): void {
        /* SB Code - Start */
        window.removeEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    @HostListener('window:resize', ['$event'])
    public handleResize(event: UIEvent): void {
        const width = (event.target as Window).innerWidth;
        this.updateBreadcrumbItems(width);
    }

    public updateBreadcrumbItems(width: number): void {
        if (width < 640) {
            this.maxItems = 1;
        } else {
            this.maxItems = 2;
        }
        this.overflowMode = this.maxItems <= 2 ? BreadcrumbOverflowMode.Menu : BreadcrumbOverflowMode.None;
        this.breadcrumb.refresh();
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'header-7' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                    setTimeout(() => {
                        this.breadcrumb.refresh();
                    }, 250);
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
