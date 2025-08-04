import { Component, OnInit, OnDestroy, HostListener, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownButtonModule, DropDownButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';
import { ChartAllModule, ChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-line-chart-5',
    standalone: true,
    imports: [ButtonModule, DropDownButtonModule, ChartAllModule],
    templateUrl: './line-chart-5.component.html'
})
export class LineChart5Component implements OnInit, OnDestroy {
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

    public chartData1: Object[] = [
        { xAxis: 'Jan', yAxis: 30 },
        { xAxis: 'Feb', yAxis: 20 },
        { xAxis: 'Mar', yAxis: 29 },
        { xAxis: 'Apr', yAxis: 37 },
        { xAxis: 'May', yAxis: 40 },
        { xAxis: 'Jun', yAxis: 25 },
        { xAxis: 'Jul', yAxis: 35 },
        { xAxis: 'Aug', yAxis: 48 },
        { xAxis: 'Sep', yAxis: 23 },
        { xAxis: 'Oct', yAxis: 26 },
        { xAxis: 'Nov', yAxis: 29 },
        { xAxis: 'Dec', yAxis: 40 }
    ];

    public chartData2: Object[] = [
        { xAxis: 'Jan', yAxis: 30 },
        { xAxis: 'Feb', yAxis: 20 },
        { xAxis: 'Mar', yAxis: 26 },
        { xAxis: 'Apr', yAxis: 16 },
        { xAxis: 'May', yAxis: 30 },
        { xAxis: 'Jun', yAxis: 40 },
        { xAxis: 'Jul', yAxis: 18 },
        { xAxis: 'Aug', yAxis: 40 },
        { xAxis: 'Sep', yAxis: 50 },
        { xAxis: 'Oct', yAxis: 37 },
        { xAxis: 'Nov', yAxis: 29 },
        { xAxis: 'Dec', yAxis: 40 }
    ];

    public primaryXAxis: Object = {
        valueType: 'Category',
        labelPlacement: 'OnTicks',
        labelIntersectAction: 'None',
        interval: 1
    };

    public primaryYAxis: Object = {
        labelFormat: '{value}k',
        minimum: 10,
        maximum: 60,
        interval: 10
    };

    public tooltip: Object = {
        enable: true,
        shared: false,
        format: '${point.y} (+5.9%)<br>21 ${point.x}, 08:30 PM',
        header: '',
        showNearestTooltip: true,
        enableMarker: false
    };

    public crosshair: Object = {
        enable: true,
        lineType: 'Vertical',
        snapToData: true,
        dashArray: '4,4',
        verticalLineColor: '#9CA3AF'
    };

    public chartLoad(args: any, lightTheme: string, darkTheme: string): void {
        args.chart.theme = this.isDarkMode ? darkTheme : lightTheme;
        this.resize();
    };

    @HostListener('window:resize')
    public resize(): void {
        let labelRotation = window.innerWidth <= 640 ? -90 : 0;
        this.primaryXAxis = { ...this.primaryXAxis, labelRotation: labelRotation }
        if (this.rangeDropdown.element.classList.contains('e-active')) {
            this.rangeDropdown.toggle();
        }
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'line-chart-5' && blockData.theme) {
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
