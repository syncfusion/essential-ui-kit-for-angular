import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownButtonModule, DropDownButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';
import { ChartAllModule, ChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-line-chart-1',
    standalone: true,
    imports: [ButtonModule, DropDownButtonModule, ChartAllModule],
    templateUrl: './line-chart-1.component.html'
})
export class LineChart1Component implements OnInit, OnDestroy {
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

    public chartData: any[] = [
        { xAxis: 'Jan', yAxis: 400 },
        { xAxis: 'Feb', yAxis: 5000 },
        { xAxis: 'Mar', yAxis: 6000 },
        { xAxis: 'Apr', yAxis: 20000 },
        { xAxis: 'May', yAxis: 10000 },
        { xAxis: 'Jun', yAxis: 800 },
        { xAxis: 'Jul', yAxis: 8500 },
        { xAxis: 'Aug', yAxis: 10000 },
        { xAxis: 'Sep', yAxis: 8500 },
        { xAxis: 'Oct', yAxis: 10000 },
        { xAxis: 'Nov', yAxis: 500 },
        { xAxis: 'Dec', yAxis: 15000 }
    ];

    public primaryXAxis: Object = {
        valueType: 'Category',
        edgeLabelPlacement: 'Shift',
        labelStyle: { fontWeight: '500' },
        interval: 1,
        labelIntersectAction: 'None'
    };

    public primaryYAxis: Object = {
        lineStyle: { width: 0 },
        labelStyle: { fontWeight: '500' },
        maximum: 25000,
        interval: 5000,
        minimum: 0
    };

    public tooltip: Object = {
        enable: true,
        header: '',
        enableMarker: false,
        format: '${point.x} : ${point.y}'
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
                if (blockData.name === 'line-chart-1' && blockData.theme) {
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
