import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-statistics-4',
    standalone: true,
    imports: [CommonModule, ButtonModule],
    templateUrl: './statistics-4.component.html'
})
export class Statistics4Component implements OnInit, OnDestroy {
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */

    public metricsData: any[] = [
        {
            metricName: 'Calories',
            currentValue: 243,
            currentPercentage: 12,
            metricAssets: 'calories.png',
            unit: 'kcal',
            trend: 'up'
        },
        {
            metricName: 'Activity',
            currentValue: 56,
            currentPercentage: -12,
            metricAssets: 'activity.png',
            unit: 'min',
            trend: 'down'
        },
        {
            metricName: 'Total Distance',
            currentValue: 3,
            currentPercentage: 12,
            metricAssets: 'total-distance.png',
            unit: 'miles',
            trend: 'up'
        },
        {
            metricName: 'Sleep',
            currentValue: 7,
            currentPercentage: -12,
            metricAssets: 'sleep.png',
            unit: 'h',
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
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'statistics-4' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
