import { Component, OnInit, OnDestroy, HostListener, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ChartAllModule, ChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-area-chart-3',
    standalone: true,
    imports: [ButtonModule, ChartAllModule],
    templateUrl: './area-chart-3.component.html'
})
export class AreaChart3Component implements OnInit, OnDestroy {
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

    public chartData: object[] = [
        { xAxis: 'Jan', yAxis1: 13000, yAxis2: 8000, yAxis3: 6000 },
        { xAxis: 'Feb', yAxis1: 14000, yAxis2: 9000, yAxis3: 5000 },
        { xAxis: 'Mar', yAxis1: 15000, yAxis2: 10000, yAxis3: 2000 },
        { xAxis: 'Apr', yAxis1: 12000, yAxis2: 7000, yAxis3: 5000 },
        { xAxis: 'May', yAxis1: 16000, yAxis2: 11000, yAxis3: 5000 },
        { xAxis: 'Jun', yAxis1: 16000, yAxis2: 11000, yAxis3: 13000 },
        { xAxis: 'Jul', yAxis1: 19000, yAxis2: 14000, yAxis3: 13000 },
        { xAxis: 'Aug', yAxis1: 19000, yAxis2: 14000, yAxis3: 7000 },
        { xAxis: 'Sep', yAxis1: 12000, yAxis2: 7000, yAxis3: 7000 },
        { xAxis: 'Oct', yAxis1: 10000, yAxis2: 7000, yAxis3: 5000 },
        { xAxis: 'Nov', yAxis1: 12000, yAxis2: 5000, yAxis3: 7000 },
        { xAxis: 'Dec', yAxis1: 12500, yAxis2: 7500, yAxis3: 6500 }
    ];

    public primaryXAxis: object = {
        valueType: 'Category',
        interval: 1,
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        labelIntersectAction: 'None',
        labelStyle: { fontWeight: '500' }
    };

    public primaryYAxis: object = {
        minimum: 0,
        maximum: 30000,
        interval: 5000,
        labelFormat: '{value}',
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        labelStyle: { fontWeight: '500' }
    };

    public tooltip: object = {
        enable: true,
        shared: true,
        header: '',
        showHeaderLine: false
    }

    public crosshair: object = {
        enable: true,
        lineType: 'Vertical',
        dashArray: '5,5'
    };

    public chartLoad(args: any, lightTheme: string, darkTheme: string): void {
        args.chart.theme = this.isDarkMode ? darkTheme : lightTheme;
        this.resize();
    };

    @HostListener('window:resize')
    public resize(): void {
        let labelRotation = window.innerWidth <= 640 ? -90 : 0;
        this.primaryXAxis = { ...this.primaryXAxis, labelRotation: labelRotation };
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'area-chart-3' && blockData.theme) {
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
