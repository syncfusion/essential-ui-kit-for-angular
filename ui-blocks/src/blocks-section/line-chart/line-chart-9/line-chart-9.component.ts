import { Component, OnInit, OnDestroy, HostListener, ViewChild } from '@angular/core';
import { DropDownButtonModule, DropDownButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';
import { ChartAllModule, ChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-line-chart-9',
    standalone: true,
    imports: [DropDownButtonModule, ChartAllModule],
    templateUrl: './line-chart-9.component.html'
})
export class LineChart9Component implements OnInit, OnDestroy {
    @ViewChild('chart') public chart!: ChartComponent;
    @ViewChild('rangeDropdown') public rangeDropdown!: DropDownButtonComponent;
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
        
    public chartData: any[] = [
        { day: '2', xAxis: 3.8, yAxis: 2.5 },
        { day: '4', xAxis: 3.8, yAxis: 2.2 },
        { day: '6', xAxis: 3.8, yAxis: 2.8 },
        { day: '8', xAxis: 3.8, yAxis: 3 },
        { day: '10', xAxis: 3.8, yAxis: 3.6 },
        { day: '12', xAxis: 3.8, yAxis: 4.1 },
        { day: '14', xAxis: 3.8, yAxis: 4 },
        { day: '16', xAxis: 3.8, yAxis: 4.2 },
        { day: '18', xAxis: 3.8, yAxis: 3.2 },
        { day: '20', xAxis: 3.8, yAxis: 4.4 },
        { day: '22', xAxis: 3.8, yAxis: 4.8 },
        { day: '24', xAxis: 3.8, yAxis: 5 },
        { day: '26', xAxis: 3.8, yAxis: 4.6 },
        { day: '28', xAxis: 3.8, yAxis: 4.9 },
        { day: '30', xAxis: 3.8, yAxis: 5.2 }
    ];

    public primaryXAxis: Object = {
        valueType: 'Category',
        interval: 1,
        labelStyle: { fontWeight: '500' }
    };
    
    public primaryYAxis: Object = {
        labelFormat: '${value}K',
        minimum: 0,
        maximum: 8,
        interval: 2,
        labelStyle: { fontWeight: '500' }
    };

    public tooltip: Object = {
        enable: true,
        shared: true,
        format: '${series.name} : ${point.y}',
        header: '',
        showHeaderLine: false
    };

    public crosshair: Object = {
        enable: true,
        snapToData: true,
        lineType: 'Vertical',
        highlightCategory: true,
        verticalLineColor: '#01A8B5',
        opacity: 0.5
    };

    public chartLoad(args: any, lightTheme: string, darkTheme: string): void {
        args.chart.theme = this.isDarkMode ? darkTheme : lightTheme;
    };

    @HostListener('window:resize')
    public resize(): void {
        if (this.rangeDropdown.element.classList.contains('e-active')) {
            this.rangeDropdown.toggle();
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
                if (blockData.name === 'line-chart-9' && blockData.theme) {
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