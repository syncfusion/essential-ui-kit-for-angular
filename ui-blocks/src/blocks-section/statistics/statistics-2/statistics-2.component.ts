import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from '@syncfusion/ej2-angular-popups';

@Component({
  selector: 'app-statistics-2',
  standalone: true,
  imports: [CommonModule, TooltipModule],
  templateUrl: './statistics-2.component.html'
})
export class Statistics2Component implements OnInit, OnDestroy {
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
            metricName: 'Website Visits',
            currentValue: '756',
            contextInfo: '',
            currentPercentage: '0.02%',
            total: '221,314'
        },
        {
            metricName: 'Bounce Rate',
            currentValue: '36.7%',
            contextInfo: 'Percentage of visitors who leave after viewing one page.',
            currentPercentage: '3.31',
            total: '34.12%'

        },
        {
            metricName: 'Page Views',
            currentValue: '1,593',
            contextInfo: '',
            currentPercentage: '0.02%',
            total: '651,029'
        },
        {
            metricName: 'Session',
            currentValue: '5.6',
            contextInfo: '',
            currentPercentage: '0.01%',
            total: '4,231'
        },
        {
            metricName: 'Per Visit Value',
            currentValue: '36.7%',
            contextInfo: 'Average revenue generated per visit.',
            currentPercentage: '3.31',
            total: '34,12%'
        }
    ];

    public isLastRowAndColumn(index: number, totalItems: number) {
        const columnCount = window.innerWidth < 576 ? 1 : window.innerWidth < 1024 ? 3 : 5;
        return {
            isLastRow: Math.floor(index / columnCount) === Math.ceil(totalItems / columnCount) - 1,
            isLastColumn: (index + 1) % columnCount === 0
        };
    }     

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'statistics-2' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
