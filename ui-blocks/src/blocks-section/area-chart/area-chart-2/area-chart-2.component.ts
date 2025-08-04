import { Component, OnInit, OnDestroy, HostListener, ViewChild } from '@angular/core';
import { DropDownButtonModule, DropDownButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';
import { ChartAllModule, ChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-area-chart-2',
    standalone: true,
    imports: [DropDownButtonModule, ChartAllModule],
    templateUrl: './area-chart-2.component.html'
})
export class AreaChart2Component implements OnInit, OnDestroy {
    @ViewChild('chart') public chart!: ChartComponent;
    @ViewChild('desktopDropdown') public desktopDropdown!: DropDownButtonComponent;
    @ViewChild('mobileDropdown') public mobileDropdown!: DropDownButtonComponent;
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
        { month: 'Jan', value: 1200 },
        { month: 'Feb', value: 3200 },
        { month: 'Mar', value: 8989 },
        { month: 'Apr', value: 7600 },
        { month: 'May', value: 5300 },
        { month: 'Jun', value: 3100 },
        { month: 'Jul', value: 2500 },
        { month: 'Aug', value: 4900 },
        { month: 'Sep', value: 6200 },
        { month: 'Oct', value: 2900 },
        { month: 'Nov', value: 2100 }
    ];

    public primaryXAxis: object = {
        valueType: 'Category',
        interval: 1,
        labelStyle: { fontWeight: '500' },
        labelIntersectAction: 'None',
        majorGridLines: { width: 0 }
    };

    public primaryYAxis: object = {
        labelStyle: { size: '0' },
        lineStyle: { width: 0 },
        majorGridLines: { width: 1 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        minorGridLines: { width: 0 }
    };

    public tooltip: object = {
        enable: true,
        header: '',
        enableMarker: false,
        format: '${point.y} +5.9%'
    };

    public chartLoad(args: any, lightTheme: string, darkTheme: string): void {
        args.chart.theme = this.isDarkMode ? darkTheme : lightTheme;
        this.resize();
    };

    @HostListener('window:resize')
    public resize(): void {
        let labelRotation = window.innerWidth <= 640 ? -90 : 0;
        this.primaryXAxis = { ...this.primaryXAxis, labelRotation: labelRotation };
        if (this.desktopDropdown.element.classList.contains('e-active')) {
            this.desktopDropdown.toggle();
        }
        if (this.mobileDropdown.element.classList.contains('e-active')) {
            this.mobileDropdown.toggle();
        }
    };

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'area-chart-2' && blockData.theme) {
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
