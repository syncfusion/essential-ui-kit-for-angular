import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MaskedTextBoxAllModule, TextAreaModule, TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { RadioButtonModule, ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { AccordionModule, AccordionComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-checkout-2',
    standalone: true,
    imports: [MaskedTextBoxAllModule, TextAreaModule, TextBoxModule, DropDownListModule, RadioButtonModule, ButtonModule, AccordionModule],
    templateUrl: './checkout-2.component.html',
    styleUrl: './checkout-2.component.css'
})
export class Checkout2Component implements OnInit, OnDestroy {
    /* SB Code - Start */
    @ViewChild('accordion') public expandAccordion!: AccordionComponent;
    public currentTheme: string = 'tailwind';
    /* SB Code - End */

    constructor() { }

    public ngOnInit(): void {
        /* SB Code - Start */
        window.addEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    /* SB Code - Start */
    public ngAfterViewInit(): void {
        this.refreshAccordion(2000);
    }
    /* SB Code - End */

    public ngOnDestroy(): void {
        /* SB Code - Start */
        window.removeEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    /* SB Code - Start */
    private refreshAccordion(timeout: number): void {
        setTimeout(() => {
            this.expandAccordion.refresh();
        }, timeout);
    }

    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'checkout-2' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                    this.refreshAccordion(1000);
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
