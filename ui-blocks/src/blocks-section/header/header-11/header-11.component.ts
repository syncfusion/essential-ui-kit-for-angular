import { Component, OnInit, OnDestroy, HostListener, ViewChild } from '@angular/core';
import { TabModule, BreadcrumbModule, BreadcrumbOverflowMode, TabComponent, BreadcrumbComponent } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-header-11',
    standalone: true,
    imports: [TabModule, BreadcrumbModule, ButtonModule],
    templateUrl: './header-11.component.html',
    styleUrl: './header-11.component.css'
})
export class Header11Component implements OnInit, OnDestroy {
    @ViewChild('tab') tab!: TabComponent;
    @ViewChild('breadcrumb') breadcrumb!: BreadcrumbComponent;
    public breadcrumbOverflowMode: BreadcrumbOverflowMode = BreadcrumbOverflowMode.None;
    public width!: string;
    public maxItems: number = 2;
    public tabOverflowMode: string = 'Popup';
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */

    constructor() { }

    public ngOnInit(): void {
        /* SB Code - Start */
        window.addEventListener('message', this.handleMessageEvent);
        this.tab.refresh();
        /* SB Code - End */
    }

    /* SB Code - Start */
    public ngAfterViewInit(): void {
        setTimeout(() => {
            this.tab.refresh();
        }, 250);
        this.tab.refreshActiveTabBorder();
        this.updateTabItems();
    }
    /* SB Code - End */

    public ngOnDestroy(): void {
        /* SB Code - Start */
        window.removeEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    @HostListener('window:resize', ['$event'])
    public onResize(event: UIEvent): void {
        const width = (event.target as Window).innerWidth;
        this.updateBreadcrumbItems(width);
        this.updateTabItems();
    }

    public updateBreadcrumbItems(width: number): void {
        if (width < 640) {
            this.maxItems = 1;
        } else {
            this.maxItems = 2;
        }
        this.breadcrumbOverflowMode = this.maxItems <= 2 ? BreadcrumbOverflowMode.Menu : BreadcrumbOverflowMode.None;
        this.breadcrumb.refresh();
    }

    public updateTabItems(): void {
        if (window.innerWidth < 640) {
            this.tabOverflowMode = 'Popup';
        } else {
            this.tabOverflowMode = 'None';
        }
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'header-11' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                    setTimeout(() => {
                        this.tab.refresh();
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
