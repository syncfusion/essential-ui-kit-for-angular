import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-statistics-9',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './statistics-9.component.html'
})
export class Statistics9Component implements OnInit, OnDestroy {
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */

    public metricsData: any[] = [
        {
            metricName: 'Impressions',
            currentValue: '23.5K',
            currentPercentage: 3.5
        },
        {
            metricName: 'Active Users',
            currentValue: '432K',
            currentPercentage: -0.5
        },
        {
            metricName: 'User Engagements',
            currentValue: '89%',
            currentPercentage: 9
        },
        {
            metricName: 'Total Orders',
            currentValue: '56,312',
            currentPercentage: 4
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
                if (blockData.name === 'statistics-9' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
