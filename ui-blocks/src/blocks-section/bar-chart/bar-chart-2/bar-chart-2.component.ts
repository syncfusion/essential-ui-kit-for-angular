import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { AccumulationChartAllModule, ChartAllModule, ChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-bar-chart-2',
    standalone: true,
    imports: [ButtonModule, AccumulationChartAllModule, ChartAllModule],
    templateUrl: './bar-chart-2.component.html'
})
export class BarChart2Component implements OnInit, OnDestroy {
    @ViewChild('barchart') public barchart!: ChartComponent;
    @ViewChild('piechart') public piechart!: ChartComponent;
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

    public barchartData: Object[] = [
        { Date: "21", Food: 20, Grocery: 15, Shopping: 10, Transport: 40 },
        { Date: "22", Food: 15, Grocery: 10, Shopping: 10, Transport: 20 },
        { Date: "23", Food: 35, Grocery: 20, Shopping: 10, Transport: 20 },
        { Date: "24", Food: 23, Grocery: 10, Shopping: 10, Transport: 30 },
        { Date: "25", Food: 25, Grocery: 15, Shopping: 10, Transport: 25 },
        { Date: "26", Food: 23, Grocery: 20, Shopping: 10, Transport: 20 },
        { Date: "27", Food: 20, Grocery: 16, Shopping: 10, Transport: 10 }
    ];

    public piechartData: Object[] = [
        { xAxis: 'Food', yAxis: 30 },
        { xAxis: 'Grocery', yAxis: 15 },
        { xAxis: 'Shopping', yAxis: 35 },
        { xAxis: 'Transport', yAxis: 20 }
    ];

    public primaryXAxis: Object = {
        majorGridLines: { width: 0 },
        minorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        interval: 1,
        lineStyle: { width: 0 },
        labelIntersectAction: 'Rotate45',
        valueType: 'Category',
        labelStyle: { fontWeight: '500' }
    };

    public primaryYAxis: Object = {
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        majorGridLines: { width: 1 },
        minorGridLines: { width: 1 },
        minorTickLines: { width: 0 },
        labelStyle: { size: '0px' },
        minimum: 0,
        maximum: 100,
        interval: 25
    };

    public dataLabel: Object = {
        visible: true,
        position: 'Outside',
        format: '{value}%',
        font: {
            fontWeight: '400',
            size: '14px'
        },
        connectorStyle: {
            width: 0
        }
    };

    public pieLegend: Object = {
        visible: true,
        position: 'Bottom',
        alignment: 'Center',
        textStyle: { size: '12px' },
        shapeWidth: 8,
        shapeHeight: 8
    };

    public centerLabel: Object = {
        text: 'Today',
        textStyle: {
            fontWeight: '600',
            size: '16px'
        },
    };

    public chartLoad(args: any, lightTheme: string, darkTheme: string): void {
        args.chart.theme = this.isDarkMode ? darkTheme : lightTheme;
    };

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'bar-chart-2' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
                else if (blockData.mode) {
                    this.isDarkMode = blockData.mode == 'dark';
                    this.barchart.refresh();
                    this.piechart.refresh();
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
