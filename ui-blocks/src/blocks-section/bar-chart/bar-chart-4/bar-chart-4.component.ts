import { Component, OnInit, OnDestroy, HostListener, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ChartAllModule, ChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-bar-chart-4',
    standalone: true,
    imports: [ButtonModule, ChartAllModule],
    templateUrl: './bar-chart-4.component.html'
})
export class BarChart4Component implements OnInit, OnDestroy {
    @ViewChild('chart') public chart!: ChartComponent;
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
        { day: "01", x: 270, y: 150 },
        { day: "02", x: 200, y: 90 },
        { day: "03", x: 310, y: 170 },
        { day: "04", x: 130, y: 80 },
        { day: "05", x: 180, y: 120 },
        { day: "06", x: 80, y: 50 },
        { day: "07", x: 190, y: 190 }
    ];

    public primaryXAxis: Object = {
        valueType: 'Category',
        interval: 1,
        majorGridLines: { width: 0 },
        minorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        labelStyle: { fontWeight: '500' }
    };

    public primaryYAxis: Object = {
        maximum: 400,
        interval: 100,
        lineStyle: { width: 0, size: '0px' },
        majorTickLines: { width: 0 },
        majorGridLines: { width: 1 },
        minorGridLines: { width: 1 },
        minorTickLines: { width: 0 },
        labelStyle: { size: '0px' }
    };

    public legendSettings: Object = {
        visible: true,
        position: 'Top',
        alignment: 'Far'
    };

    public tooltip: Object = {
        enable: true,
        header: '',
        enableMarker: false
    };

    public tooltipRender(args: any): void {
        args.text = `Income : $${this.chartData[args.data.pointIndex].x}<br>Expense : $${this.chartData[args.data.pointIndex].y}`
    };

    public chartLoad(args: any, lightTheme: string, darkTheme: string): void {
        args.chart.theme = this.isDarkMode ? darkTheme : lightTheme;
    };

    @HostListener('window:resize')
    public resize(): void {
        let legendposition = window.innerWidth < 400 ? { position: 'Bottom', alignment: 'Center' } : { position: 'Top', alignment: 'Far' }
        this.legendSettings = {
            ...this.legendSettings,
            ...legendposition
        }
    };

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'bar-chart-4' && blockData.theme) {
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
