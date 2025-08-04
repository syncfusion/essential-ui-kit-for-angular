import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { ButtonModule} from '@syncfusion/ej2-angular-buttons';
import { DialogModule, DialogComponent } from '@syncfusion/ej2-angular-popups';

@Component({
    selector: 'app-ai-pricing-table-1',
    standalone: true,
    imports: [ButtonModule, DialogModule],
    templateUrl: './ai-pricing-table-1.component.html'
})
export class AiPricingTable1Component implements OnInit, OnDestroy {
    @ViewChild("pricing") public pricing!: DialogComponent;
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

    @HostListener('window:resize')
    public handleResize(): void {
        const isMobile = window.innerWidth <= 640;
        this.pricing.refresh();
        this.pricing.show(isMobile);
    }
    
    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (
                    blockData.name === 'ai-pricing-table-1' &&
                    blockData.theme
                ) {
                    this.currentTheme = blockData.theme;
                    setTimeout(() => {
                        this.pricing.refresh();
                        this.pricing.show(window.innerWidth <= 640);
                    }, 300);
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
