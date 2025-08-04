import { Component, OnInit, OnDestroy, HostListener, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DatePickerModule, CalendarView } from '@syncfusion/ej2-angular-calendars';
import { ChartAllModule, ChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-bar-chart-1',
    standalone: true,
    imports: [ButtonModule, ChartAllModule, DatePickerModule],
    templateUrl: './bar-chart-1.component.html'
})
export class BarChart1Component implements OnInit, OnDestroy {
    @ViewChild('chart') public chart!: ChartComponent;
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public isDarkMode: boolean = false;
    public start: CalendarView = 'Year';
    public depth: CalendarView = 'Year';

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
        { xAxis: 'Accounting', yAxis: 620 },
        { xAxis: 'Implementation', yAxis: 550 },
        { xAxis: 'Deployment', yAxis: 400 },
        { xAxis: 'Marketing', yAxis: 415 },
        { xAxis: 'Customer Support', yAxis: 310 },
        { xAxis: 'Project operations', yAxis: 270 },
        { xAxis: 'Logistics', yAxis: 170 },
        { xAxis: 'Finance', yAxis: 150 },
        { xAxis: 'Development', yAxis: 80 }
    ];

    public primaryXAxis: Object = {
        valueType: 'Category',
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        labelAlignment: 'Center',
        interval: 1,
        maximumLabelWidth: 100,
        labelIntersectAction: 'None',
        enableWrap: true,
        labelStyle: { fontWeight: '500' }
    };

    public primaryYAxis: Object = {
        labelFormat: '${value}K',
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        minimum: 0,
        maximum: 700,
        interval: 140,
        labelStyle: { fontWeight: '500' }
    };

    public tooltip: Object = {
        enable: true,
        format: '${point.x} : ${point.y}',
        enableMarker: false
    };

    public chartLoad(args: any, lightTheme: string, darkTheme: string): void {
        args.chart.theme = this.isDarkMode ? darkTheme : lightTheme;
        this.resize();
    };

    @HostListener('window:resize')
    public resize(): void {
        const newRotation = window.innerWidth < 660 ? -90 : -45;
        this.primaryXAxis = { ...this.primaryXAxis, labelRotation: newRotation };
    };

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'bar-chart-1' && blockData.theme) {
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
