import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartAllModule } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-statistics-5',
    standalone: true,
    imports: [CommonModule, ChartAllModule],
    templateUrl: './statistics-5.component.html'
})
export class Statistics5Component implements OnInit, OnDestroy {
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */

    public metricsData: any[] = [
        {
            id: 1,
            metricName: 'Patients',
            currentValue: 6025,
            currentPercentage: 8.95,
            trend: 'up',
            metricPoints: [
                { x: 1, y: 5520 },
                { x: 2, y: 5580 },
                { x: 3, y: 5510 },
                { x: 4, y: 5650 },
                { x: 5, y: 5800 },
                { x: 6, y: 5750 },
                { x: 7, y: 5900 },
                { x: 8, y: 6100 },
                { x: 9, y: 5950 },
                { x: 10, y: 6025 }
            ]
        },
        {
            id: 2,
            metricName: 'New This Week',
            currentValue: 452,
            currentPercentage: 4.11,
            trend: 'up',
            metricPoints: [
                { x: 1, y: 425 },
                { x: 2, y: 418 },
                { x: 3, y: 430 },
                { x: 4, y: 442 },
                { x: 5, y: 410 },
                { x: 6, y: 435 },
                { x: 7, y: 445 },
                { x: 8, y: 450 },
                { x: 9, y: 448 },
                { x: 10, y: 452 }
            ]
        },
        {
            id: 3,
            metricName: 'Critical Alerts',
            currentValue: 948,
            currentPercentage: 12.05,
            trend: 'down',
            metricPoints: [
                { x: 1, y: 1050 },
                { x: 2, y: 1090 },
                { x: 3, y: 1020 },
                { x: 4, y: 1080 },
                { x: 5, y: 980 },
                { x: 6, y: 1010 },
                { x: 7, y: 970 },
                { x: 8, y: 940 },
                { x: 9, y: 960 },
                { x: 10, y: 948 }
            ]
        },
        {
            id: 4,
            metricName: 'Appointments',
            currentValue: 5626,
            currentPercentage: 27.47,
            trend: 'up',
            metricPoints: [
                { x: 1, y: 4650 },
                { x: 2, y: 4410 },
                { x: 3, y: 4800 },
                { x: 4, y: 5100 },
                { x: 5, y: 5300 },
                { x: 6, y: 5250 },
                { x: 7, y: 5400 },
                { x: 8, y: 5550 },
                { x: 9, y: 5590 },
                { x: 10, y: 5626 }
            ]
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

    public setYaxis(data: any[]): object {
        let minValue = Math.min(...data.map(item => item.y));
        let maxValue = Math.max(...data.map(item => item.y));

        return {
            visible: false,
            lineStyle: { width: 0 },
            minimum: minValue,
            maximum: maxValue,
            interval: 100,
            majorGridLines: { width: 0 },
            minorGridLines: { width: 0 }
        };
    }

    public getGradientFill(trend: string): string {
        return trend === 'up' ? 'url(#gradient-up)' : 'url(#gradient-down)';
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'statistics-5' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
