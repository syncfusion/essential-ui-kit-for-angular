import { Component, OnInit, OnDestroy, HostListener, ViewChild } from '@angular/core';
import { DropDownButtonModule, DropDownButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';
import { DateRangePickerModule, DateRangePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { ChartAllModule, ChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-bar-chart-6',
    standalone: true,
    imports: [DropDownButtonModule, DateRangePickerModule, ChartAllModule],
    templateUrl: './bar-chart-6.component.html'
})
export class BarChart6Component implements OnInit, OnDestroy {
    @ViewChild('chart') public chart!: ChartComponent;
    @ViewChild('ticketDropdown') public ticketDropdown!: DropDownButtonComponent;
    @ViewChild('daterangepicker') public daterangepicker!: DateRangePickerComponent;
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
        { date: "Dec 1", xAxis: 27, yAxis: 15 },
        { date: "Dec 2", xAxis: 20, yAxis: 9 },
        { date: "Dec 3", xAxis: 31, yAxis: 17 },
        { date: "Dec 4", xAxis: 13, yAxis: 8 },
        { date: "Dec 5", xAxis: 18, yAxis: 12 },
        { date: "Dec 6", xAxis: 8, yAxis: 5 },
        { date: "Dec 7", xAxis: 19, yAxis: 19 }
    ];

    public primaryXAxis: Object = {
        valueType: 'Category',
        interval: 1,
        labelStyle: { fontWeight: '500' },
        majorGridLines: { width: 1 },
        minorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 }
    };

    public primaryYAxis: Object = {
        maximum: 40,
        interval: 10,
        labelStyle: { fontWeight: '500' },
        majorGridLines: { width: 1 },
        minorGridLines: { width: 0 }
    };

    public chartLoad(args: any, lightTheme: string, darkTheme: string): void {
        args.chart.theme = this.isDarkMode ? darkTheme : lightTheme;
    };

    @HostListener('window:resize')
    public resize(): void {
        let labelRotation = window.innerWidth < 400 ? -45 : 0;
        this.primaryXAxis = { ...this.primaryXAxis, labelRotation: labelRotation }
        if (this.ticketDropdown.element.classList.contains('e-active')) {
            this.ticketDropdown.toggle();
        }
        this.daterangepicker.refresh();
    };

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'bar-chart-6' && blockData.theme) {
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
