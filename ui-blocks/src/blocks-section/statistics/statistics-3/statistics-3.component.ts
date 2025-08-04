import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-statistics-3',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './statistics-3.component.html'
})
export class Statistics3Component implements OnInit, OnDestroy {
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */

    public metricsData: any[] = [
        {
            metricName: 'Total Revenue',
            currentValue: '$825,000',
            currentPercentage: 26,
            trend: 'up'
        },
        {
            metricName: 'Total Leads',
            currentValue: '99',
            currentPercentage: -9,
            trend: 'down'
        },
        {
            metricName: 'High Interest Leads',
            currentValue: '36',
            currentPercentage: 69,
            trend: 'up'
        },
        {
            metricName: 'Qualified Leads',
            currentValue: '17',
            currentPercentage: -21,
            trend: 'down'
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
                if (blockData.name === 'statistics-3' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
