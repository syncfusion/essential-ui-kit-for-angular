import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-statistics-6',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './statistics-6.component.html'
})
export class Statistics6Component implements OnInit, OnDestroy {
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
            metricName: 'Followers',
            currentValue: 6025,
            previousValue: 6780,
            currentPercentage: 10.32,
            trend: 'up'
        },
        {
            metricName: 'Likes',
            currentValue: 72094,
            previousValue: 78001,
            currentPercentage: 7.57,
            trend: 'down'
        },
        {
            metricName: 'Comments',
            currentValue: 16009,
            previousValue: 14911,
            currentPercentage: 7.36,
            trend: 'up'
        },
        {
            metricName: 'Reach',
            currentValue: 890121,
            previousValue: 501780,
            currentPercentage: 77.39,
            trend: 'up'
        }
    ]; 

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'statistics-6' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
