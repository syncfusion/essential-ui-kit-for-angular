import { Component, OnInit, OnDestroy, HostListener, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ChartAllModule, ChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-line-chart-4',
    standalone: true,
    imports: [ButtonModule, ChartAllModule, DatePickerModule],
    templateUrl: './line-chart-4.component.html'
})
export class LineChart4Component implements OnInit, OnDestroy {
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
        { month: 'Jan', xAxis: 600, yAxis: 550 },
        { month: 'Feb', xAxis: 720, yAxis: 690 },
        { month: 'Mar', xAxis: 670, yAxis: 710 },
        { month: 'Apr', xAxis: 780, yAxis: 740 },
        { month: 'May', xAxis: 610, yAxis: 700 },
        { month: 'Jun', xAxis: 800, yAxis: 770 },
        { month: 'Jul', xAxis: 850, yAxis: 800 },
        { month: 'Aug', xAxis: 770, yAxis: 740 },
        { month: 'Sep', xAxis: 680, yAxis: 690 },
        { month: 'Oct', xAxis: 740, yAxis: 720 },
        { month: 'Nov', xAxis: 810, yAxis: 780 },
        { month: 'Dec', xAxis: 790, yAxis: 760 }
    ];

    public primaryXAxis: Object = {
        valueType: 'Category',
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        labelStyle: { fontWeight: '500' },
        labelIntersectAction: 'None',
        interval: 1
    };

    public primaryYAxis: Object = {
        labelFormat: '{value}',
        minimum: 0,
        maximum: 1200,
        interval: 200,
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        labelStyle: { fontWeight: '500' }
    };

    public tooltip: Object = {
        enable: true,
        shared: true,
        format: '${series.name} : ${point.y}',
        header: '${point.x} 24, 2024',
        showHeaderLine: false
    };

    public crosshair: Object = {
        enable: true,
        lineType: 'Vertical',
        snapToData: true,
        dashArray: '4,5',
        verticalLineColor: '#D1D5DB'
    };

    public legendSettings: Object = {
        visible: true,
        position: 'Top',
        alignment: 'Near',
        shapeHeight: 10,
        shapeWidth: 10,
        height: '40px'
    };

    public chartLoad(args: any, lightTheme: string, darkTheme: string): void {
        args.chart.theme = this.isDarkMode ? darkTheme : lightTheme;
        this.resize();
    };

    @HostListener('window:resize')
    public resize(): void {
        let labelRotation = window.innerWidth <= 640 ? -90 : 0;
        this.primaryXAxis = { ...this.primaryXAxis, labelRotation: labelRotation }
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'line-chart-4' && blockData.theme) {
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
