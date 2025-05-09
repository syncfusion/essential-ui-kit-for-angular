import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { TabModule, TabComponent } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-header-2',
    standalone: true,
    imports: [TabModule, ButtonModule],
    templateUrl: './header-2.component.html'
})
export class Header2Component implements OnInit, OnDestroy {
    @ViewChild('tab') tab!: TabComponent;
    public overflowMode: string = 'Popup';
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
     
    @HostListener('window:resize')
    public onResize(): void {
        this.updateTabItems();
    }

    public updateTabItems(): void {
        if (window.innerWidth < 640) {
            this.overflowMode = 'Popup';
        } else {
            this.overflowMode = 'None';
        }
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'header-2' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                    setTimeout(() => {
                        this.tab.refresh();
                    }, 250);
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
