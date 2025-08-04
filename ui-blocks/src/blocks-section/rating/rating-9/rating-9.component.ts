import { Component, OnInit, OnDestroy, ViewChildren, QueryList, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingModule } from '@syncfusion/ej2-angular-inputs';
import { ProgressBarModule, ProgressBarComponent } from '@syncfusion/ej2-angular-progressbar';

@Component({
    selector: 'app-rating-9',
    imports: [CommonModule, RatingModule, ProgressBarModule],
    templateUrl: './rating-9.component.html'
})
export class Rating9Component implements OnInit, OnDestroy {
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
        { id: 1, label: 5, value: 96 },
        { id: 2, label: 4, value: 18 },
        { id: 3, label: 3, value: 11 },
        { id: 4, label: 2, value: 4 },
        { id: 5, label: 1, value: 6 }
    ];

    @HostListener('window:resize')
    public handleResize(): void {
        this.progressWidth = window.innerWidth < 640 ? '100%' : '246px';
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
                if (blockData.name === 'rating-9' && blockData.theme) {
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