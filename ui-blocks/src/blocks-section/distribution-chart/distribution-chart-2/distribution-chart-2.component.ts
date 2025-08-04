import { Component, OnInit, OnDestroy, HostListener, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownButtonModule, DropDownButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';
import { AccumulationChartAllModule, ChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-distribution-chart-2',
    standalone: true,
    imports: [ButtonModule, DropDownButtonModule, AccumulationChartAllModule],
    templateUrl: './distribution-chart-2.component.html'
})
export class DistributionChart2Component implements OnInit, OnDestroy {
    @ViewChild('chart') public chart!: ChartComponent;
    @ViewChild('rangeDropdown') public rangeDropdown!: DropDownButtonComponent;
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public isDarkMode: boolean = false;
    public isMobileview: boolean = window.innerWidth < 600;

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
        { id: 1, xAxis: 'Product', yAxis: 30 },
        { id: 2, xAxis: 'Restaurant and Bars', yAxis: 23 },
        { id: 3, xAxis: 'Internet and Media', yAxis: 18 },
        { id: 4, xAxis: 'Pay for workspace', yAxis: 17 },
        { id: 5, xAxis: 'Other', yAxis: 12 }
    ];

    public dataLabel: Object = { visible: true, position: 'Inside', name: 'yAxis', format: '{value}%' };

    public legendSettings: Object = {
        visible: true,
        layout: 'Auto',
        position: 'Right',
        width: '200px',
        margin: { top: 16 },
        itemPadding: 14,
        textStyle: {
            size: '14px',
            fontWeight: '400'
        }
    };

    public border: Object = { width: 3, color: '#FFFFFF' };

    public textRender(args: any): void {
        args.font.color = ['#FFFFFF', '#000000', '#000000', '#FFFFFF', '#000000'][args.point.index];
    };

    public chartLoad(args: any, lightTheme: string, darkTheme: string, borderColor: string): void {
        args.chart.theme = this.isDarkMode ? darkTheme : lightTheme;
        this.border = {
            color: this.isDarkMode ? borderColor : '#FFFFFF',
            width: 3
        };
    };

    @HostListener('window:resize')
    public resize(): void {
        this.isMobileview = window.innerWidth < 600;
        let legendposition = this.isMobileview ? { position: 'Bottom', width: '100%' } : { position: 'Right', width: '200px' }
        this.legendSettings = {
            ...this.legendSettings,
            alignment: 'Center',
            ...legendposition
        }
        if (this.rangeDropdown.element.classList.contains('e-active')) {
            this.rangeDropdown.toggle();
        }
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'distribution-chart-2' && blockData.theme) {
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
