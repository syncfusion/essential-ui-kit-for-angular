import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-statistics-1',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './statistics-1.component.html'
})
export class Statistics1Component implements OnInit, OnDestroy {
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */

    public metricsData: any[] = [
        {
            metricName: 'Total Revenue',
            currentValue: '$6,435',
            currentPercentage: 15
        },
        {
            metricName: 'Total Visitors',
            currentValue: '3,356',
            currentPercentage: 5
        },
        {
            metricName: 'Total Transactions',
            currentValue: '6,435',
            currentPercentage: -2
        },
        {
            metricName: 'Total Products',
            currentValue: '3,260',
            currentPercentage: 3
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
                if (blockData.name === 'statistics-1' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
