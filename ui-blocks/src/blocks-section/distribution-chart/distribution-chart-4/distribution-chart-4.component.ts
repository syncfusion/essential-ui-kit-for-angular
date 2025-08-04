import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownButtonModule, DropDownButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';
import { AccumulationChartAllModule, ChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-distribution-chart-4',
    standalone: true,
    imports: [ButtonModule, DropDownButtonModule, AccumulationChartAllModule],
    templateUrl: './distribution-chart-4.component.html'
})
export class DistributionChart4Component implements OnInit, OnDestroy {
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
        { xAxis: 'Chrome', yAxis: 67.48, text: 'Chrome(67.48%)', fill: "url(#DiagonalLine)" },
        { xAxis: 'Safari', yAxis: 18.2, text: 'Safari(18.2%)', fill: "url(#Grid)" },
        { xAxis: 'Edge', yAxis: 4.84, text: 'Edge(4.84%)', fill: "url(#VerticalStripe)" },
        { xAxis: 'Firefox', yAxis: 2.60, text: 'Firefox(2.60%)', fill: "url(#VerticalDash)" },
        { xAxis: 'Opera', yAxis: 2, text: 'Opera(2%)', fill: "url(#HorizontalStripe)" },
        { xAxis: 'Others', yAxis: 4.88, text: 'Others(4.88%)', fill: "url(#Dots)" }
    ];

    public dataLabel: Object = {
        name: 'text',
        visible: true,
        position: 'Outside',
        connectorStyle: { length: '20px', color: '#9CA3AF' }
    };

    public tooltip: Object = {
        enable: false,
        enableMarker: false
    };

    public border: Object = { width: 1, color: '#FFFFFF' };

    public chartLoad(args: any, lightTheme: string, darkTheme: string, borderColor: string): void {
        args.chart.theme = this.isDarkMode ? darkTheme : lightTheme;
        this.border = {
            color: this.isDarkMode ? borderColor : '#FFFFFF',
            width: 1
        };
    };
        
    @HostListener('window:resize')
    public resize(): void {
        if (this.rangeDropdown.element.classList.contains('e-active')) {
            this.rangeDropdown.toggle();
        }
        this.dataLabel = { ...this.dataLabel, visible: window.innerWidth > 440 }
        this.tooltip = { ...this.tooltip, enable: window.innerWidth < 440 }
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'distribution-chart-4' && blockData.theme) {
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
