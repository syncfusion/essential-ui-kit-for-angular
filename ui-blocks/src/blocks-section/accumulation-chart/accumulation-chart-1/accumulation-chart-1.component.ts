import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { AccumulationChartAllModule, ChartComponent } from '@syncfusion/ej2-angular-charts';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';

@Component({
    selector: 'app-accumulation-chart-1',
    standalone: true,
    imports: [ButtonModule, AccumulationChartAllModule, ListViewModule],
    templateUrl: './accumulation-chart-1.component.html',
    styleUrl: './accumulation-chart-1.component.css'
})
export class AccumulationChart1Component implements OnInit, OnDestroy {
    @ViewChild('chart') public chart!: ChartComponent;
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public isDarkMode: boolean = false;

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

    public chartData: Object[] = [
        { id: 1, x: 'Food & Drink', y: 48 },
        { id: 2, x: 'Grocery', y: 32 },
        { id: 3, x: 'Shopping', y: 13 },
        { id: 4, x: 'Transport', y: 7 }
    ];

    public centerLabel: Object = {
        text: '$8,295',
        textStyle: {
            fontWeight: '500',
            size: '16px'
        }
    };

    public chartLoad(args: any, lightTheme: string, darkTheme: string): void {
        args.chart.theme = this.isDarkMode ? darkTheme : lightTheme;
    };

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'accumulation-chart-1' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
                else if (blockData.mode) {
                    this.isDarkMode = blockData.mode == 'dark';
                    this.chart.refresh();
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
