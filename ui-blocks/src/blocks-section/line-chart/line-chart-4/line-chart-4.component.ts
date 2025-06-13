import { Component, OnInit, OnDestroy, HostListener, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ChartAllModule, ChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-line-chart-4',
    standalone: true,
    imports: [ButtonModule, ChartAllModule],
    templateUrl: './line-chart-4.component.html'
})
export class LineChart4Component implements OnInit, OnDestroy {
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

    public chartData: Object[] = [
        { month: 'Jan', x: 600, y: 550 },
        { month: 'Feb', x: 720, y: 690 },
        { month: 'Mar', x: 670, y: 710 },
        { month: 'Apr', x: 780, y: 740 },
        { month: 'May', x: 610, y: 700 },
        { month: 'Jun', x: 800, y: 770 },
        { month: 'Jul', x: 850, y: 800 },
        { month: 'Aug', x: 770, y: 740 },
        { month: 'Sep', x: 680, y: 690 },
        { month: 'Oct', x: 740, y: 720 },
        { month: 'Nov', x: 810, y: 780 },
        { month: 'Dec', x: 790, y: 760 }
    ];

    public primaryXAxis: Object = {
        valueType: 'Category',
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        labelStyle: { fontWeight: '500' },
        interval: 1
    };

    public primaryYAxis: Object = {
        labelFormat: '{value}',
        minimum: 0,
        maximum: 1200,
        interval: 200,
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        labelStyle: { fontWeight: '500' }
    };

    public tooltip: Object = {
        enable: true,
        shared: true,
        format: '${series.name} : ${point.y}',
        header: '${point.x} 24, 2024',
        showHeaderLine: false
    };

    public crosshair: Object = {
        enable: true,
        lineType: 'Vertical',
        snapToData: true,
        dashArray: '4,5',
        verticalLineColor: '#D1D5DB'
    };

    public legendSettings: Object = {
        visible: true,
        position: 'Top',
        alignment: 'Near',
        shapeHeight: 10,
        shapeWidth: 10,
        padding: 15
    };

    public chartLoad(args: any, lightTheme: string, darkTheme: string): void {
        args.chart.theme = this.isDarkMode ? darkTheme : lightTheme;
    };

    @HostListener('window:resize')
    public resize(): void {
        let labelRotation = window.innerWidth < 400 ? -90 : 0;
        this.primaryXAxis = { ...this.primaryXAxis, labelRotation: labelRotation }
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'line-chart-4' && blockData.theme) {
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
