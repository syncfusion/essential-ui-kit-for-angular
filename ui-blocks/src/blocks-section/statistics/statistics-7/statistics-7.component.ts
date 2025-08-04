import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-statistics-7',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './statistics-7.component.html'
})
export class Statistics7Component implements OnInit, OnDestroy {
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */

    public metricsData: any[] = [
        {
            metricName: 'Total Revenue',
            currentValue: 4185.82,
            valueDescription: '+1.23% (45.32)'
        },
        {
            metricName: 'Trending Volume',
            currentValue: 2.38,
            valueDescription: 'Shares Traded'
        },
        {
            metricName: 'Market Breadth',
            currentValue: 1.5,
            valueDescription: 'Advance / Decline Ratio'
        },
        {
            metricName: 'VIX',
            currentValue: 18.62,
            valueDescription: '-0.54 (-282%)'
        }
    ];
    
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
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'statistics-7' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
