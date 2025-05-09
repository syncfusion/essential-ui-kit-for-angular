import { Component, OnInit, OnDestroy, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartAllModule, ChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-statistics-11',
    standalone: true,
    imports: [CommonModule, ChartAllModule],
    templateUrl: './statistics-11.component.html'
})
export class Statistics11Component implements OnInit, OnDestroy {
    @ViewChildren('chart') public chart!: QueryList<ChartComponent>;
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */

    public metricsData: any[] = [
        {
            metricName: 'Total Revenue',
            currentValue: '$54,231',
            currentPercentage: 14.5,
            metricPoints: [
                { x: 1, y: 0.3 },
                { x: 2, y: 1.1 },
                { x: 3, y: 1.1 },
                { x: 4, y: 0.9 },
                { x: 5, y: 1.8 },
                { x: 6, y: 2.2 },
                { x: 7, y: 2.0 },
                { x: 8, y: 2.0 },
                { x: 9, y: 2.5 },
                { x: 10, y: 3.0 }
            ]
        },
        {
            metricName: 'Total Orders',
            currentValue: '1,234',
            currentPercentage: 5.2,
            metricPoints: [
                { x: 1, y: 3.0 },
                { x: 2, y: 2.5 },
                { x: 3, y: 2.0 },
                { x: 4, y: 2.0 },
                { x: 5, y: 2.2 },
                { x: 6, y: 1.8 },
                { x: 7, y: 0.9 },
                { x: 8, y: 1.1 },
                { x: 9, y: 1.1 },
                { x: 10, y: 0.3 }
            ]
        },
        {
            metricName: 'Conversion Rate',
            currentValue: '3.8%',
            currentPercentage: 18.8,
            metricPoints: [
                { x: 1, y: 0.3 },
                { x: 2, y: 1.1 },
                { x: 3, y: 1.1 },
                { x: 4, y: 0.9 },
                { x: 5, y: 1.8 },
                { x: 6, y: 2.2 },
                { x: 7, y: 2.0 },
                { x: 8, y: 2.0 },
                { x: 9, y: 2.5 },
                { x: 10, y: 3.0 }
            ]
        },
        {
            metricName: 'New Customers',
            currentValue: '321',
            currentPercentage: 18.5,
            metricPoints: [
                { x: 1, y: 3.0 },
                { x: 2, y: 2.5 },
                { x: 3, y: 2.0 },
                { x: 4, y: 2.0 },
                { x: 5, y: 2.2 },
                { x: 6, y: 1.8 },
                { x: 7, y: 0.9 },
                { x: 8, y: 1.1 },
                { x: 9, y: 1.1 },
                { x: 10, y: 0.3 }
            ]
        }
    ];

    constructor() { }

    public ngOnInit(): void {
        /* SB Code - Start */
        window.addEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    /* SB Code - Start */
    public ngAfterViewInit(): void {
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 100);
    }
    /* SB Code - End */

    public ngOnDestroy(): void {
        /* SB Code - Start */
        window.removeEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    /* SB Code - Start */
    private refreshChart(timeout: number): void {
        setTimeout(() => {
            this.chart.forEach((chartInstance) => chartInstance.refresh());
        }, timeout);
    }

    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'statistics-11' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                    this.refreshChart(700);
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
