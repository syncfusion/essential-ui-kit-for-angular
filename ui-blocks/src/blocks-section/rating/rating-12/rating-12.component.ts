import { Component, OnInit, OnDestroy, ViewChildren, QueryList, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingModule } from '@syncfusion/ej2-angular-inputs';
import { ProgressBarModule, ProgressBarComponent } from '@syncfusion/ej2-angular-progressbar';

@Component({
    selector: 'app-rating-12',
    imports: [CommonModule, RatingModule, ProgressBarModule],
    templateUrl: './rating-12.component.html'
})
export class Rating12Component implements OnInit, OnDestroy {
    @ViewChildren('progressbar') public progressBar!: QueryList<ProgressBarComponent>;
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public width!: string;
    public progressWidth: string = '100%';

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

    public customerRating: any[] = [
        { id: 1, label: 'Features', value: 92, ratingValue: 4.6 },
        { id: 2, label: 'Value for money', value: 90, ratingValue: 4.2 },
        { id: 3, label: 'Ease of use', value: 54, ratingValue: 2.7 },
        { id: 4, label: 'Customer support', value: 98, ratingValue: 4.9 }
    ];

    @HostListener('window:resize')
    public handleResize(): void {
        this.progressWidth = window.innerWidth < 640 ? '100%' : '306px';
        /* SB Code - Start */
        this.refreshProgressBar();
        /* SB Code - End */
    }

    /* SB Code - Start */
    private refreshProgressBar() {
        setTimeout(() => {
            this.progressBar.forEach((progressbar) => progressbar.refresh());
        }, 300);
    }

    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'rating-12' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                    const searchInterval = setInterval(() => {
                        this.refreshProgressBar();
                    }, 250);
                    setTimeout(() => clearInterval(searchInterval), 500);
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
