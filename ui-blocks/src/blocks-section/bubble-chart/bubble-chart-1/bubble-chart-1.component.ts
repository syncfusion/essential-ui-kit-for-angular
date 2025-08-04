import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { ChartAllModule, ChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-bubble-chart-1',
    standalone: true,
    imports: [CommonModule, ButtonModule, ListViewModule, ChartAllModule],
    templateUrl: './bubble-chart-1.component.html'
})
export class BubbleChart1Component implements OnInit, OnDestroy {
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

    public chartData: any[] = [
        { id: 1, category: 'Groceries', xAxis: 74, yAxis: 48, bubbleSize: 15, expense: 720, fill: '#267DDA' },
        { id: 2, category: 'Food & Drinks', xAxis: 90, yAxis: 32, bubbleSize: 10, expense: 480, fill: '#91BD34' },
        { id: 3, category: 'Shopping', xAxis: 91, yAxis: 7, bubbleSize: 2, expense: 195, fill: '#D83B01' },
        { id: 4, category: 'Transportation', xAxis: 80, yAxis: 13, bubbleSize: 8, expense: 105, fill: '#DE4383' }
    ];

    public primaryXAxis: Object = {
        minimum: 65,
        maximum: 102,
        interval: 5,
        crossesAt: 5,
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorGridLines: { width: 0 },
        minorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        labelStyle: { size: '0px' }
    };

    public primaryYAxis: Object = {
        minimum: -1,
        maximum: 65,
        interval: 5,
        crossesAt: 10,
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorGridLines: { width: 0 },
        minorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        labelStyle: { size: '0px' }
    };

    public marker: Object = {
        dataLabel: { visible: true, format: '{value}%', position: 'Middle', font: { fontWeight: '600' } }
    };
        
    public textRender(args: any) {
        args.font.color=['#267DDA','#91BD34','#D83B01','#DE4383'][args.point.index];
    };

    public chartLoad(args: any, lightTheme: string, darkTheme: string): void {
        args.chart.theme = this.isDarkMode ? darkTheme : lightTheme;
    };

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'bubble-chart-1' && blockData.theme) {
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
