import { Component, OnInit, OnDestroy } from '@angular/core';
import { ButtonModule, CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-signin-2',
    standalone: true,
    imports: [TextBoxModule, ButtonModule, CheckBoxModule, CommonModule],
    templateUrl: './signin-2.component.html'
})
export class Signin2Component implements OnInit, OnDestroy {
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

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'signin-2' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}