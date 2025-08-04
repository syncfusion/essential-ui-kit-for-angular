import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-statistics-12',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './statistics-12.component.html'
})
export class Statistics12Component implements OnInit, OnDestroy {
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */

    public metricsData: any[] = [
        {
            id: 1,
            metricName: 'Dream Car',
            currentValue: 26008,
            goal: 34678
        },
        {
            id: 2,
            metricName: 'House Savings',
            currentValue: 12567,
            goal: 25000
        },
        {
            id: 3,
            metricName: 'Motorcycle',
            currentValue: 12567,
            goal: 25000
        },
        {
            id: 4,
            metricName: 'Laptop',
            currentValue: 12567,
            goal: 25000
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
                if (blockData.name === 'statistics-12' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
