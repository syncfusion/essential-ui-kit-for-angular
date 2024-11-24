import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MaskedTextBoxAllModule, TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { RadioButtonModule, ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { StepperModule, StepperComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-checkout-1',
    standalone: true,
    imports: [MaskedTextBoxAllModule, TextBoxModule, DropDownListModule, RadioButtonModule, ButtonModule, StepperModule],
    templateUrl: './checkout-1.component.html'
})
export class Checkout1Component implements OnInit, OnDestroy {
    /* SB Code - Start */
    @ViewChild('stepper') public stepper!: StepperComponent;
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
        this.refreshStepper(2000);
    }
    /* SB Code - End */

    public ngOnDestroy(): void {
        /* SB Code - Start */
        window.removeEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    /* SB Code - Start */
    private refreshStepper(timeout: number): void {
        setTimeout(() => {
            this.stepper.refreshProgressbar();
        }, timeout);
    }

    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'checkout-1' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
        this.refreshStepper(1000);
    };
    /* SB Code - End */
}
