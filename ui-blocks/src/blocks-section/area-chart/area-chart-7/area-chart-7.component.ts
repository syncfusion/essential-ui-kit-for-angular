import { Component, OnInit, OnDestroy, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownButtonModule, DropDownButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';
import { ChartAllModule, ChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-area-chart-7',
    standalone: true,
    imports: [CommonModule, ButtonModule, DropDownButtonModule, ChartAllModule],
    templateUrl: './area-chart-7.component.html'
})
export class AreaChart7Component implements OnInit, OnDestroy {
    @ViewChild('chart') public chart!: ChartComponent;
    @ViewChild('rangeDropdown') public rangeDropdown!: DropDownButtonComponent;
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public isDarkMode: boolean = false;
    public isMobileView: boolean = false;

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
        { date: new Date(2024, 0, 6), high: 25, low: 18 },
        { date: new Date(2024, 0, 7), high: 28, low: 20 },
        { date: new Date(2024, 0, 8), high: 25, low: 14 },
        { date: new Date(2024, 0, 9), high: 26, low: 17 },
        { date: new Date(2024, 0, 10), high: 27, low: 17 },
        { date: new Date(2024, 0, 11), high: 27, low: 16 },
        { date: new Date(2024, 0, 12), high: 29, low: 17 },
        { date: new Date(2024, 0, 13), high: 28, low: 19 },
        { date: new Date(2024, 0, 14), high: 29, low: 17 }
    ];

    public primaryXAxis: Object = {
        visible: false,
        valueType: 'DateTime'
    };

    public primaryYAxis: Object = {
        labelFormat: '{value}°',
        minimum: 0,
        maximum: 40,
        interval: 10,
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        labelStyle: { fontWeight: '500' }
    };

    public tooltip: Object = {
        enable: true,
        shared: true,
        enableMarker: false,
        showHeaderLine: false,
        header: '${point.x}',
        format: 'Daily ${series.name} : ${point.y}'
    };

    public crosshair: Object = {
        enable: true,
        lineType: 'Vertical',
        snapToData: true,
        dashArray: '4,5'
    };

    public chartLoad(args: any, lightTheme: string, darkTheme: string): void {
        args.chart.theme = this.isDarkMode ? darkTheme : lightTheme;
    };

    @HostListener('window:resize')
    public resize(): void {
        this.isMobileView = window.innerWidth <= 600;
        if (this.rangeDropdown.element.classList.contains('e-active')) {
            this.rangeDropdown.toggle();
        }
    };

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'area-chart-7' && blockData.theme) {
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
