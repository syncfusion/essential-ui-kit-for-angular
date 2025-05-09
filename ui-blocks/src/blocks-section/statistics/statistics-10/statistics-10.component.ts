import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-statistics-10',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './statistics-10.component.html'
})
export class Statistics10Component implements OnInit, OnDestroy {
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */

    public metricsData: any[] = [
        {
            metricName: 'Total Income',
            currentValue: '$480,500',
            currentPercentage: 12.95,
            trend: 'up',
            metricAssets: 'total-income.png'
        },
        {
            metricName: 'Total Profit',
            currentValue: '$72,375',
            currentPercentage: 12.95,
            trend: 'up',
            metricAssets: 'total-profit.png'
        },
        {
            metricName: 'Total Revenue',
            currentValue: '$425,000',
            currentPercentage: 5.18,
            trend: 'down',
            metricAssets: 'total-revenue.png'
        },
        {
            metricName: 'Total Conversion',
            currentValue: '10.87%',
            currentPercentage: 12.95,
            trend: 'up',
            metricAssets: 'total-conversion.png'
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
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'statistics-10' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
