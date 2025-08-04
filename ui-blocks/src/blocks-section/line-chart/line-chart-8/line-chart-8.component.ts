import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownButtonModule, DropDownButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';
import { ChartAllModule, ChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-line-chart-8',
    standalone: true,
    imports: [ButtonModule, DropDownButtonModule, ChartAllModule],
    templateUrl: './line-chart-8.component.html'
})
export class LineChart8Component implements OnInit, OnDestroy {
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
        { day: 'Mon', xAxis: 49, yAxis: 25 },
        { day: 'Tue', xAxis: 70, yAxis: 48 },
        { day: 'Wed', xAxis: 76, yAxis: 48 },
        { day: 'Thu', xAxis: 99, yAxis: 51 },
        { day: 'Fri', xAxis: 124, yAxis: 97 },
        { day: 'Sat', xAxis: 112, yAxis: 77 },
        { day: 'Sun', xAxis: 125, yAxis: 97 }
    ];
    
    public primaryXAxis: Object = {
        valueType: 'Category',
        edgeLabelPlacement: 'Shift',
        labelStyle: { fontWeight: '500' },
        labelPlacement:'OnTicks'
    };

    public primaryYAxis: Object = {
        labelFormat: '${value}K',
        minimum: 0,
        maximum: 150,
        interval: 25,
        labelStyle: { fontWeight: '500' }
    };

    public tooltip: Object = {
        enable: true,
        shared: false,
        showNearestTooltip: true,
        format: '${point.y}',
        header: '',
        enableMarker: false
    };

    public crosshair: Object = {
        enable: true,
        snapToData: true,
        dashArray: '4,5',
        verticalLineColor: '#9CA3AF',
        horizontalLineColor: '#9CA3AF'
    };

    public tooltipRender(args: any): void {
        args.text = `$${(args.data.pointY * 1000).toLocaleString()}`
    };

    public chartLoad(args: any, lightTheme: string, darkTheme: string): void {
        args.chart.theme = this.isDarkMode ? darkTheme : lightTheme;
    };

    @HostListener('window:resize')
    public resize(): void {
        if (this.rangeDropdown.element.classList.contains('e-active')) {
            this.rangeDropdown.toggle();
        }
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'line-chart-8' && blockData.theme) {
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