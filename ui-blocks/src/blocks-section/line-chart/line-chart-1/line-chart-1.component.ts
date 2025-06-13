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
        { x: 'Jan', y: 400 },
        { x: 'Feb', y: 5000 },
        { x: 'Mar', y: 6000 },
        { x: 'Apr', y: 20000 },
        { x: 'May', y: 10000 },
        { x: 'Jun', y: 800 },
        { x: 'Jul', y: 8500 },
        { x: 'Aug', y: 10000 },
        { x: 'Sep', y: 8500 },
        { x: 'Oct', y: 10000 },
        { x: 'Nov', y: 500 },
        { x: 'Dec', y: 15000 }
    ];

    public primaryXAxis: Object = {
        valueType: 'Category',
        edgeLabelPlacement: 'Shift',
        labelStyle: { fontWeight: '500' },
        interval: 1
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
    };

    @HostListener('window:resize')
    public resize(): void {
        let labelRotation = window.innerWidth < 400 ? -90 : 0;
        this.primaryXAxis = { ...this.primaryXAxis, labelRotation: labelRotation }
        if (this.rangeDropdown.element.classList.contains('e-active')) {
            this.rangeDropdown.toggle();
        }
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
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
