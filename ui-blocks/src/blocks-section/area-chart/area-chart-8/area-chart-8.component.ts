import { Component, OnInit, OnDestroy, HostListener, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownButtonModule, DropDownButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';
import { ChartAllModule, ChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-area-chart-8',
    standalone: true,
    imports: [ButtonModule, DropDownButtonModule, ChartAllModule],
    templateUrl: './area-chart-8.component.html'
})
export class AreaChart8Component implements OnInit, OnDestroy {
    @ViewChild('chart') public chart!: ChartComponent;
    @ViewChild('rangeDropdown') public rangeDropdown!: DropDownButtonComponent;
    @ViewChild('countryDropdown') public countryDropdown!: DropDownButtonComponent;
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
        { date: new Date(2025, 0, 1), high: 20, low: -10 },
        { date: new Date(2025, 0, 5), high: 18, low: -12 },
        { date: new Date(2025, 0, 10), high: 17, low: -11 },
        { date: new Date(2025, 0, 15), high: 19, low: -10 },
        { date: new Date(2025, 0, 20), high: 21, low: -12 },
        { date: new Date(2025, 1, 0), high: 23, low: -9 },
        { date: new Date(2025, 1, 5), high: 21, low: -10 },
        { date: new Date(2025, 1, 10), high: 20, low: -7 },
        { date: new Date(2025, 1, 15), high: 18, low: -6 },
        { date: new Date(2025, 1, 20), high: 19, low: -5 },
        { date: new Date(2025, 2, 0), high: 21, low: -4 },
        { date: new Date(2025, 2, 5), high: 20, low: -4 },
        { date: new Date(2025, 2, 10), high: 18, low: -5 },
        { date: new Date(2025, 2, 15), high: 17, low: -4 },
        { date: new Date(2025, 2, 20), high: 16, low: -2 },
        { date: new Date(2025, 3, 0), high: 32, low: 0 },
        { date: new Date(2025, 3, 5), high: 34, low: 2 },
        { date: new Date(2025, 3, 10), high: 30, low: 5 },
        { date: new Date(2025, 3, 15), high: 31, low: 6 },
        { date: new Date(2025, 3, 20), high: 34, low: 7 },
        { date: new Date(2025, 4, 0), high: 32, low: 4 },
        { date: new Date(2025, 4, 5), high: 30, low: 5 },
        { date: new Date(2025, 4, 10), high: 31, low: 6 },
        { date: new Date(2025, 4, 15), high: 32, low: 7 },
        { date: new Date(2025, 4, 20), high: 29, low: 10 },
        { date: new Date(2025, 5, 0), high: 31, low: 10 },
        { date: new Date(2025, 5, 5), high: 29, low: 12 },
        { date: new Date(2025, 5, 10), high: 27, low: 13 },
        { date: new Date(2025, 5, 15), high: 30, low: 15 },
        { date: new Date(2025, 5, 20), high: 32, low: 16 },
        { date: new Date(2025, 6, 0), high: 34, low: 12 },
        { date: new Date(2025, 6, 5), high: 33, low: 14 },
        { date: new Date(2025, 6, 10), high: 33, low: 16 },
        { date: new Date(2025, 6, 15), high: 34, low: 17 },
        { date: new Date(2025, 6, 20), high: 35, low: 19 },
        { date: new Date(2025, 7, 0), high: 34, low: 15 },
        { date: new Date(2025, 7, 5), high: 32, low: 17 },
        { date: new Date(2025, 7, 10), high: 31, low: 18 },
        { date: new Date(2025, 7, 15), high: 30, low: 19 },
        { date: new Date(2025, 7, 20), high: 32, low: 21 },
        { date: new Date(2025, 8, 0), high: 39, low: 18 },
        { date: new Date(2025, 8, 5), high: 37, low: 17 },
        { date: new Date(2025, 8, 10), high: 33, low: 16 },
        { date: new Date(2025, 8, 15), high: 34, low: 17 },
        { date: new Date(2025, 8, 20), high: 34, low: 18 },
        { date: new Date(2025, 9, 0), high: 32, low: 17 },
        { date: new Date(2025, 9, 5), high: 31, low: 18 },
        { date: new Date(2025, 9, 10), high: 29, low: 20 },
        { date: new Date(2025, 9, 15), high: 30, low: 19 },
        { date: new Date(2025, 9, 20), high: 31, low: 18 },
        { date: new Date(2025, 10, 0), high: 34, low: 18 },
        { date: new Date(2025, 10, 5), high: 32, low: 19 },
        { date: new Date(2025, 10, 10), high: 31, low: 17 },
        { date: new Date(2025, 10, 15), high: 33, low: 18 },
        { date: new Date(2025, 10, 20), high: 30, low: 16 },
        { date: new Date(2025, 11, 0), high: 26, low: 13 },
        { date: new Date(2025, 11, 5), high: 24, low: 14 },
        { date: new Date(2025, 11, 10), high: 23, low: 15 },
        { date: new Date(2025, 11, 15), high: 20, low: 13 },
        { date: new Date(2025, 11, 20), high: 21, low: 14 }
    ];

    public primaryXAxis: Object = {
        valueType: 'DateTime',
        labelFormat: 'MMM',
        intervalType: 'Months',
        majorGridLines: { width: 0 },
        labelIntersectAction: 'None',
        majorTickLines: { width: 0 },
        labelStyle: { fontWeight: '500' },
        interval: 1
    };

    public primaryYAxis: Object = {
        minimum: -30,
        maximum: 40,
        interval: 10,
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        labelStyle: { fontWeight: '500' }
    };

    public chartLoad(args: any, lightTheme: string, darkTheme: string): void {
        args.chart.theme = this.isDarkMode ? darkTheme : lightTheme;
        this.resize();
    };

    @HostListener('window:resize')
    public resize(): void {
        let labelRotation = window.innerWidth <= 640 ? -90 : 0;
        this.isMobileView = window.innerWidth <= 660;
        this.primaryXAxis = { ...this.primaryXAxis, labelRotation: labelRotation };
        this.closeDropdown(this.rangeDropdown);
        this.closeDropdown(this.countryDropdown);
    };

    public closeDropdown(dropdown: DropDownButtonComponent): void {
        if (dropdown.element.classList.contains('e-active')) {
            dropdown.toggle();
        }
    };

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'area-chart-8' && blockData.theme) {
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
