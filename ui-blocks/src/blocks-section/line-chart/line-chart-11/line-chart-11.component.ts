import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownButtonModule, DropDownButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';
import { ChartAllModule, ChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-line-chart-11',
    standalone: true,
    imports: [ButtonModule, DropDownButtonModule, ChartAllModule],
    templateUrl: './line-chart-11.component.html'
})
export class LineChart11Component implements OnInit, OnDestroy {
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
        { day: 'Sun', maxTemp: 14, avgTemp: 9, minTemp: 5 },
        { day: 'Mon', maxTemp: 23, avgTemp: 18, minTemp: 14 },
        { day: 'Tue', maxTemp: 31, avgTemp: 27, minTemp: 22 },
        { day: 'Wed', maxTemp: 27, avgTemp: 25, minTemp: 21 },
        { day: 'Thu', maxTemp: 27, avgTemp: 24, minTemp: 20 },
        { day: 'Fri', maxTemp: 26, avgTemp: 22, minTemp: 16 },
        { day: 'Sat', maxTemp: 17, avgTemp: 15, minTemp: 12 }
    ];

    public primaryXAxis: Object = {
        valueType: 'Category',
        majorTickLines: { width: 0 },
        majorGridLines: { width: 0 },
        lineStyle: { width: 0 },
        labelStyle: { fontWeight: '500' }
    };

    public primaryYAxis: Object = {
        labelFormat: '{value}°C',
        minimum: 0,
        maximum: 40,
        interval: 5,
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        labelStyle: { fontWeight: '500' }
    };

    public tooltip: Object = {
        enable: true,
        showNearestTooltip: true,
        format: 'Temp : ${point.y}',
        header: 'Dec 10, 18:21 PM',
        enableMarker: false,
        showHeaderLine: false
    };

    public chartLoad(args: any, lightTheme: string, darkTheme: string): void {
        args.chart.theme = this.isDarkMode ? darkTheme : lightTheme;
    };
    
    @HostListener('window:resize')
    public resize(): void {
        if (this.rangeDropdown.element.classList.contains('e-active')) {
            this.rangeDropdown.toggle();
        }
    };

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'line-chart-11' && blockData.theme) {
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
