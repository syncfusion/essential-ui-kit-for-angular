import { Component, OnInit, OnDestroy } from '@angular/core';
import { ButtonModule, ChipListModule } from '@syncfusion/ej2-angular-buttons';
import { RatingModule } from '@syncfusion/ej2-angular-inputs';

@Component({
    selector: 'app-rating-3',
    standalone: true,
    imports: [ButtonModule, ChipListModule, RatingModule],
    templateUrl: './rating-3.component.html'
})
export class Rating3Component implements OnInit, OnDestroy {
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
                if (blockData.name === 'rating-3' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
