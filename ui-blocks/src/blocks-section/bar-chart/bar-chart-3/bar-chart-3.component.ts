import { Component, OnInit, OnDestroy, HostListener, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownButtonModule, DropDownButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';
import { ChartAllModule, ChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-bar-chart-3',
    standalone: true,
    imports: [ButtonModule, DropDownButtonModule, ChartAllModule],
    templateUrl: './bar-chart-3.component.html'
})
export class BarChart3Component implements OnInit, OnDestroy {
    @ViewChild('chart') public chart!: ChartComponent;
    @ViewChild('rangeDropdown') public rangeDropdown!: DropDownButtonComponent;
    @ViewChild('metricDropdown') public metricDropdown!: DropDownButtonComponent;
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
        { month: "Jan", LowTemp: 3.1, HighTemp: 10.8 },
        { month: "Feb", LowTemp: 5.7, HighTemp: 14.4 },
        { month: "Mar", LowTemp: 8.4, HighTemp: 16.9 },
        { month: "Apr", LowTemp: 9.6, HighTemp: 18.2 },
        { month: "May", LowTemp: 8.5, HighTemp: 16.1 },
        { month: "Jun", LowTemp: 6.0, HighTemp: 12.5 },
        { month: "Jul", LowTemp: 1.5, HighTemp: 6.9 },
        { month: "Aug", LowTemp: 7.5, HighTemp: 3.9 },
        { month: "Sep", LowTemp: 11.5, HighTemp: 6.9 },
        { month: "Oct", LowTemp: 19.5, HighTemp: 12.9 },
        { month: "Nov", LowTemp: 14.5, HighTemp: 6.9 },
        { month: "Dec", LowTemp: 20.5, HighTemp: 15.9 }
    ];

    public primaryXAxis: Object = {
        valueType: 'Category',
        majorGridLines: { width: 0 },
        minorTickLines: { width: 0 },
        labelStyle: { fontWeight: '500' },
        interval: 1
    };

    public primaryYAxis: Object = {
        minimum: 0,
        maximum: 30,
        interval: 10,
        edgeLabelPlacement: 'Shift',
        lineStyle: { width: 0 },
        labelStyle: { fontWeight: '500' },
        majorTickLines: { width: 0 }
    };

    public crosshair: Object = {
        enable: true,
        lineType: 'Vertical',
        highlightCategory: true,
        verticalLineColor: '#267DDA',
        opacity: 0.5
    };

    public chartLoad(args: any, lightTheme: string, darkTheme: string): void {
        args.chart.theme = this.isDarkMode ? darkTheme : lightTheme;
    };

    @HostListener('window:resize')
    public resize(): void {
        let labelRotation = window.innerWidth < 660 ? -90 : 0;
        this.primaryXAxis = { ...this.primaryXAxis, labelRotation: labelRotation }
        if (this.rangeDropdown.element.classList.contains('e-active')) {
            this.rangeDropdown.toggle();
        }
        if (this.metricDropdown.element.classList.contains('e-active')) {
            this.metricDropdown.toggle();
        }
    };

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'bar-chart-3' && blockData.theme) {
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
