import { Component, OnInit, OnDestroy, HostListener, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownButtonModule, DropDownButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';
import { ChartAllModule, ChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-bar-chart-7',
    standalone: true,
    imports: [ButtonModule, DropDownButtonModule, ChartAllModule],
    templateUrl: './bar-chart-7.component.html'
})
export class BarChart7Component implements OnInit, OnDestroy {
    @ViewChild('chart') public chart!: ChartComponent;
    @ViewChild('countryDropdown') public countryDropdown!: DropDownButtonComponent;
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public columnWidth: string = '.6';
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
        { xAxis: "Jan", yAxis: 6 },
        { xAxis: "Feb", yAxis: 8.9 },
        { xAxis: "Mar", yAxis: 12 },
        { xAxis: "Apr", yAxis: 17.5 },
        { xAxis: "May", yAxis: 22.1 },
        { xAxis: "Jun", yAxis: 25 },
        { xAxis: "Jul", yAxis: 29.4 },
        { xAxis: "Aug", yAxis: 29.6 },
        { xAxis: "Sep", yAxis: 25 },
        { xAxis: "Oct", yAxis: 21.1 },
        { xAxis: "Nov", yAxis: 15.5 },
        { xAxis: "Dec", yAxis: 9.9 }
    ];

    public primaryXAxis: Object = {
        valueType: 'Category',
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        labelIntersectAction: 'None',
        labelStyle: { fontWeight: '500', size: '12px' },
        interval: 1
    };

    public primaryYAxis: Object = {
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        labelFormat: '{value}°C',
        labelStyle: { fontWeight: '500' }
    };

    public marker: Object = {
        dataLabel: {
            visible: true,
            position: 'Outer',
            font: { color: '#6B7280' }
        }
    };

    public chartLoad(args: any, lightTheme: string, darkTheme: string): void {
        args.chart.theme = this.isDarkMode ? darkTheme : lightTheme;
        this.resize();
    };

    @HostListener('window:resize')
    public resize(): void {
        let labelRotation = window.innerWidth <= 640 ? -90 : 0;
        this.primaryXAxis = { ...this.primaryXAxis, labelRotation: labelRotation }
        this.columnWidth = window.innerWidth < 400 ? '0.4' : '.6';
        if (this.countryDropdown.element.classList.contains('e-active')) {
            this.countryDropdown.toggle();
        }
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'bar-chart-7' && blockData.theme) {
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
