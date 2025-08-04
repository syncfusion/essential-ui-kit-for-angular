import { Component, OnInit, OnDestroy, HostListener, ViewChild } from '@angular/core';
import { DropDownButtonModule, DropDownButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';
import { ChartAllModule, ChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-area-chart-6',
    standalone: true,
    imports: [DropDownButtonModule, ChartAllModule],
    templateUrl: './area-chart-6.component.html'
})
export class AreaChart6Component implements OnInit, OnDestroy {
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
        { date: 'Feb 14', currentWeek: 14500, lastWeek: 15500 },
        { date: 'Feb 15', currentWeek: 16259, lastWeek: 14033 },
        { date: 'Feb 16', currentWeek: 16000, lastWeek: 16500 },
        { date: 'Feb 17', currentWeek: 19000, lastWeek: 17500 },
        { date: 'Feb 18', currentWeek: 17000, lastWeek: 16000 },
        { date: 'Feb 19', currentWeek: 18500, lastWeek: 17000 },
        { date: 'Feb 20', currentWeek: 19000, lastWeek: 16500 }
    ];

    public primaryXAxis: Object = {
        valueType: 'Category',
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        labelIntersectAction: 'None',
        labelStyle: { fontWeight: '500' }
    };

    public primaryYAxis: Object = {
        minimum: 0,
        maximum: 20000,
        interval: 5000,
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        labelStyle: { fontWeight: '500' }
    };

    public axisLabelRender(args: any): void {
        if (args.axis.name === 'primaryYAxis') {
            args.text = '$' + (Number(args.text) / 1000) + 'K';
        }
    };

    public tooltip: Object = {
        enable: true,
        enableMarker: false,
        shared: false,
        showNearestTooltip: true,
        header: '',
        showHeaderLine: false
    };

    public tooltipRender = (args: any): void => {
        if (args.text)
            args.text = `${args.series.name}: ${args.point.y.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })}`;
    };

    public chartLoad(args: any, lightTheme: string, darkTheme: string): void {
        args.chart.theme = this.isDarkMode ? darkTheme : lightTheme;
        this.resize();
    };

    @HostListener('window:resize')
    public resize(): void {
        let labelRotation = window.innerWidth <= 640 ? -90 : 0;
        this.primaryXAxis = { ...this.primaryXAxis, labelRotation: labelRotation };
        if (this.rangeDropdown.element.classList.contains('e-active')) {
            this.rangeDropdown.toggle();
        }
    };

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'area-chart-6' && blockData.theme) {
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