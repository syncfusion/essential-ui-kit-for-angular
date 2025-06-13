import { Component, OnInit, OnDestroy, HostListener, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownButtonModule, DropDownButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';
import { AccumulationChartAllModule, ChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-accumulation-chart-2',
    standalone: true,
    imports: [ButtonModule, DropDownButtonModule, AccumulationChartAllModule],
    templateUrl: './accumulation-chart-2.component.html'
})
export class AccumulationChart2Component implements OnInit, OnDestroy {
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
        { id: 1, x: 'Product', y: 30 },
        { id: 2, x: 'Restaurant and Bars', y: 23 },
        { id: 3, x: 'Internet and Media', y: 18 },
        { id: 4, x: 'Pay for workspace', y: 17 },
        { id: 5, x: 'Other', y: 12 }
    ];

    public dataLabel: Object = { visible: true, position: 'Inside', name: 'y', format: '{value}%' };

    public legendSettings: Object = {
        visible: true,
        layout: 'Auto',
        position: 'Right',
        width: '200px',
        itemPadding: 14,
        textStyle: {
            size: '14px',
            fontWeight: '400'
        }
    };

    public border: Object = { width: 3, color: '#FFFFFF' };

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
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'accumulation-chart-2' && blockData.theme) {
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
