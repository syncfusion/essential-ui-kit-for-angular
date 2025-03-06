import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-statistics-8',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statistics-8.component.html'
})
export class Statistics8Component implements OnInit, OnDestroy {
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

    public metricsData: any[] = [
        {
            metricName: 'Incoming Calls',
            callCount: 435,
            currentPercentage: 3.5,
            trend: 'up'
        },
        {
            metricName: 'Answered Calls',
            callCount: 245,
            currentPercentage: 4.2,
            trend: 'up'
        },
        {
            metricName: 'Abandoned Calls',
            callCount: 146,
            currentPercentage: -0.9,
            trend: 'down'
        },
        {
            metricName: 'Total Calls',
            callCount: 413,
            currentPercentage: 3.7,
            trend: 'up'
        }
    ];

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'statistics-8' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
