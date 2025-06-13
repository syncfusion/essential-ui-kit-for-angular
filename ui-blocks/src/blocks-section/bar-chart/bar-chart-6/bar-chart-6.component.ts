import { Component, OnInit, OnDestroy, HostListener, ViewChild } from '@angular/core';
import { DropDownButtonModule, DropDownButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';
import { ChartAllModule, ChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-bar-chart-6',
    standalone: true,
    imports: [DropDownButtonModule, ChartAllModule],
    templateUrl: './bar-chart-6.component.html'
})
export class BarChart6Component implements OnInit, OnDestroy {
    @ViewChild('chart') public chart!: ChartComponent;
    @ViewChild('ticketDropdown') public ticketDropdown!: DropDownButtonComponent;
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
        { date: "Dec 1", x: 27, y: 15 },
        { date: "Dec 2", x: 20, y: 9 },
        { date: "Dec 3", x: 31, y: 17 },
        { date: "Dec 4", x: 13, y: 8 },
        { date: "Dec 5", x: 18, y: 12 },
        { date: "Dec 6", x: 8, y: 5 },
        { date: "Dec 7", x: 19, y: 19 }
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
    };

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
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
