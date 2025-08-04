import { Component, OnInit, OnDestroy, HostListener, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownButtonModule, DropDownButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';
import { ChartAllModule, ChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-bar-chart-5',
    standalone: true,
    imports: [ButtonModule, DropDownButtonModule, ChartAllModule],
    templateUrl: './bar-chart-5.component.html'
})
export class BarChart5Component implements OnInit, OnDestroy {
    @ViewChild('chart') public chart!: ChartComponent;
    @ViewChild('rangeDropdown') public rangeDropdown!: DropDownButtonComponent;
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
        { month: 'Jan', xAxis: 1.5, yAxis: -5 },
        { month: 'Feb', xAxis: 2.5, yAxis: 25 },
        { month: 'Mar', xAxis: 3.5, yAxis: 60 },
        { month: 'Apr', xAxis: 2.3, yAxis: 0 },
        { month: 'May', xAxis: 2.5, yAxis: 22 },
        { month: 'Jun', xAxis: 2.9, yAxis: 40 },
        { month: 'Jul', xAxis: 2.4, yAxis: 3 },
        { month: 'Aug', xAxis: 3.2, yAxis: 36 },
        { month: 'Sep', xAxis: 2, yAxis: 20 },
        { month: 'Oct', xAxis: 3.7, yAxis: 40 },
        { month: 'Nov', xAxis: 2.85, yAxis: 0 },
        { month: 'Dec', xAxis: 1.3, yAxis: 6 }
    ];

    public primaryXAxis: Object = {
        valueType: 'Category',
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        labelIntersectAction: 'None',
        labelStyle: { fontWeight: '500' },
        interval: 1
    };

    public primaryYAxis: Object = {
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        labelFormat: '${value}M',
        labelStyle: { fontWeight: '500' },
        minimum: 0,
        maximum: 4,
        interval: 1
    };

    public secondaryYAxis: Object = {
        name: 'secondaryAxis',
        opposedPosition: true,
        labelFormat: '{value}%',
        lineStyle: { width: 0 },
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        labelStyle: { fontWeight: '500' },
        minimum: -20,
        maximum: 80,
        interval: 20
    };

    public chartLoad(args: any, lightTheme: string, darkTheme: string): void {
        args.chart.theme = this.isDarkMode ? darkTheme : lightTheme;
        this.resize();
    };

    @HostListener('window:resize')
    public resize(): void {
        let labelRotation = window.innerWidth <= 640 ? -90 : 0;
        this.primaryXAxis = { ...this.primaryXAxis, labelRotation: labelRotation }
        if (this.rangeDropdown.element.classList.contains('e-active')) {
            this.rangeDropdown.toggle();
        }
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'bar-chart-5' && blockData.theme) {
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
