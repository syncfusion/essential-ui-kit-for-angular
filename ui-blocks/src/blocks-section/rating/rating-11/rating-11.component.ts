import { Component, OnInit, OnDestroy, ViewChildren, QueryList, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarModule, ProgressBarComponent } from '@syncfusion/ej2-angular-progressbar';

@Component({
    selector: 'app-rating-11',
    imports: [CommonModule, ProgressBarModule],
    templateUrl: './rating-11.component.html'
})
export class Rating11Component implements OnInit, OnDestroy {
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
        { id: 1, label: 'Customer support', value: 88, ratingValue: 4.4 },
        { id: 2, label: 'Ease of use', value: 90, ratingValue: 4.5 },
        { id: 3, label: 'Reliability', value: 54, ratingValue: 2.7 },
        { id: 4, label: 'Integration', value: 90, ratingValue: 4.4 },
        { id: 5, label: 'Features', value: 88, ratingValue: 4.4 },
        { id: 6, label: 'Pricing & Value', value: 70, ratingValue: 3.5 }
    ];

    @HostListener('window:resize')
    public handleResize(): void {
        this.progressWidth = window.innerWidth < 640 ? '100%' : '214px';
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
                if (blockData.name === 'rating-11' && blockData.theme) {
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