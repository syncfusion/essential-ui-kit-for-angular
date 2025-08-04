import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownButtonModule, DropDownButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';
import { ChartAllModule, ChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-scatter-chart-1',
    standalone: true,
    imports: [ButtonModule, DropDownButtonModule, ChartAllModule],
    templateUrl: './scatter-chart-1.component.html'
})
export class ScatterChart1Component implements OnInit, OnDestroy {
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
        
    public chartData1: Object = [
        { xAxis: 960, yAxis: 81 },
        { xAxis: 1070, yAxis: 79 },
        { xAxis: 1180, yAxis: 80 },
        { xAxis: 1370, yAxis: 79 },
        { xAxis: 1490, yAxis: 80 },
        { xAxis: 1510, yAxis: 84 }
    ];

    public chartData2: Object = [
        { xAxis: 950, yAxis: 78 },
        { xAxis: 1050, yAxis: 77 },
        { xAxis: 1180, yAxis: 75 },
        { xAxis: 1230, yAxis: 80 },
        { xAxis: 1290, yAxis: 76 }
    ];

    public chartData3: Object = [
        { xAxis: 930, yAxis: 75 },
        { xAxis: 990, yAxis: 77 },
        { xAxis: 1020, yAxis: 74.5 },
        { xAxis: 1160, yAxis: 77.5 }
    ];

    public primaryXAxis: Object = {
        title: 'Product Sales',
        minimum: 900,
        maximum: 1600,
        interval: 100,
        labelIntersectAction: 'None',
        labelStyle: { size: '12px', fontWeight: '500' },
        titleStyle: { size: '12px', fontWeight: '500' }
    };

    public primaryYAxis: Object = {
        title: 'CSAT Score (%)',
        minimum: 70,
        maximum: 86,
        interval: 4,
        labelStyle: { size: '12px', fontWeight: '500' },
        titleStyle: { size: '12px', fontWeight: '500' }
    };

    public legendSettings: Object = {
        visible: true,
        position: 'Top',
        alignment: 'Near',
        height: '40px'
    };

    public markerSquare = { visible: true, shape: 'Rectangle', width: 14, height: 14 };
    public markerCircle = { visible: true, shape: 'Circle', width: 14, height: 14 };
    public markerTriangle = { visible: true, shape: 'Triangle', width: 14, height: 14 };

    public chartLoad(args: any, lightTheme: string, darkTheme: string): void {
        args.chart.theme = this.isDarkMode ? darkTheme : lightTheme;
        this.resize();
    };
        
    @HostListener('window:resize')
    public resize(): void {
        const newRotation = window.innerWidth < 660 ? -90 : 0;
        this.primaryXAxis = { ...this.primaryXAxis, labelRotation: newRotation };
        if (this.rangeDropdown.element.classList.contains('e-active')) {
            this.rangeDropdown.toggle();
        }
    };

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data) && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'scatter-chart-1' && blockData.theme) {
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
