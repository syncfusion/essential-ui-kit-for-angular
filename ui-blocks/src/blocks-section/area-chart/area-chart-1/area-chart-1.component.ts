import { Component, OnInit, OnDestroy, HostListener, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownButtonModule, DropDownButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';
import { ChartAllModule, ChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-area-chart-1',
    standalone: true,
    imports: [ButtonModule, DropDownButtonModule, ChartAllModule],
    templateUrl: './area-chart-1.component.html'
})
export class AreaChart1Component implements OnInit, OnDestroy {
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

    public chartData: object[] = [
        { Day: 'Mon', Revenue: 8000, Expense: 6000 },
        { Day: 'Tue', Revenue: 12000, Expense: 10000 },
        { Day: 'Wed', Revenue: 12000, Expense: 22000 },
        { Day: 'Thu', Revenue: 18000, Expense: 20000 },
        { Day: 'Fri', Revenue: 20000, Expense: 20000 },
        { Day: 'Sat', Revenue: 26000, Expense: 12000 },
        { Day: 'Sun', Revenue: 25000, Expense: 14000 }
    ];

    public primaryXAxis: object = {
        valueType: 'Category',
        labelPlacement: 'OnTicks',
        labelStyle: { fontWeight: '500' }
    };

    public primaryYAxis: object = {
        labelFormat: '${value}',
        minimum: 5000,
        maximum: 40000,
        interval: 5000,
        labelStyle: { fontWeight: '500' }
    };

    public marker = {
        visible: true,
        width: 8,
        height: 8,
        shape: 'Circle',
        isFilled: true,
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
                if (blockData.name === 'area-chart-1' && blockData.theme) {
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
