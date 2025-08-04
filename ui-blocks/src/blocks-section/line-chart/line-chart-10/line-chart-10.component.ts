import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownButtonModule, DropDownButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';
import { ChartAllModule, ChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-line-chart-10',
    standalone: true,
    imports: [ButtonModule, DropDownButtonModule, ChartAllModule],
    templateUrl: './line-chart-10.component.html'
})
export class LineChart10Component implements OnInit, OnDestroy {
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
        { xAxis: 4, yAxis: 0 },
        { xAxis: 8, yAxis: 12 },
        { xAxis: 12, yAxis: 25 },
        { xAxis: 16, yAxis: 37 },
        { xAxis: 20, yAxis: 50 },
        { xAxis: 24, yAxis: 75 }
    ];

    public primaryXAxis: Object = {
        valueType: 'Category',
        majorTickLines: { width: 0 },
        majorGridLines: { width: 0 },
        lineStyle: { width: 1, dashArray: '4,4' },
        labelStyle: { fontWeight: '500' },
        labelPlacement:'OnTicks'
    };

    public primaryYAxis: Object = {
        minimum: 0,
        maximum: 75,
        interval: 25,
        labelFormat: "{value}%",
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        majorGridLines: { dashArray: '4,5' },
        labelStyle: { fontWeight: '500' }
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
                if (blockData.name === 'line-chart-10' && blockData.theme) {
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