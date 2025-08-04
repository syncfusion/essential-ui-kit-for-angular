import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingModule } from '@syncfusion/ej2-angular-inputs';

@Component({
    selector: 'app-rating-10',
    imports: [CommonModule, RatingModule],
    templateUrl: './rating-10.component.html',
    styleUrl: './rating-10.component.css'
})
export class Rating10Component implements OnInit, OnDestroy {
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

    public customerRating: any[] = [
        { rating: "User experience", value: 4.0 },
        { rating: "Pricing", value: 3.5 },
        { rating: "Features", value: 4.0 },
        { rating: "Performance", value: 5.0 },
        { rating: "Support", value: 4.0 }
    ];

    public reviewData: any[] = [
        {
            title: "Great SaaS platform for businesses!",
            rating: 4,
            review: "This SaaS application provides an intuitive interface, making it easy to manage tasks and automate workflows. The overall performance is smooth, and the features are well-structured for different use cases."
        },
        {
            title: "Highly scalable and reliable!",
            rating: 4,
            review: "We've been using this platform for months, and it has helped streamline our operations significantly. The uptime is excellent, and the integrations with third-party tools are seamless."
        },
        {
            title: "Affordable and feature-packed solution!",
            rating: 4,
            review: "This tool offers a lot more than we expected at this price point. From project tracking to team collaboration, it covers all the essentials. Would love to see more advanced analytics in future updates."
        }
    ];

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'rating-10' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}