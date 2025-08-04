import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownButtonModule, DropDownButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';
import { ChartAllModule, ChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-area-chart-9',
    standalone: true,
    imports: [ButtonModule, DropDownButtonModule, ChartAllModule],
    templateUrl: './area-chart-9.component.html'
})
export class AreaChart9Component implements OnInit, OnDestroy {
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
        { month: 'Jan', charleExpense: 250, steveExpense: 160, peterExpense: 110, johnExpense: 80 },
        { month: 'Feb', charleExpense: 260, steveExpense: 130, peterExpense: 175, johnExpense: 90 },
        { month: 'Mar', charleExpense: 340, steveExpense: 210, peterExpense: 140, johnExpense: 43 },
        { month: 'Apr', charleExpense: 245, steveExpense: 190, peterExpense: 135, johnExpense: 78 },
        { month: 'May', charleExpense: 350, steveExpense: 260, peterExpense: 70, johnExpense: 11 },
        { month: 'Jun', charleExpense: 320, steveExpense: 240, peterExpense: 115, johnExpense: 16 },
        { month: 'Jul', charleExpense: 330, steveExpense: 188, peterExpense: 195, johnExpense: 72 },
        { month: 'Aug', charleExpense: 320, steveExpense: 225, peterExpense: 180, johnExpense: 72 },
        { month: 'Sep', charleExpense: 270, steveExpense: 220, peterExpense: 125, johnExpense: 94 },
        { month: 'Oct', charleExpense: 320, steveExpense: 250, peterExpense: 220, johnExpense: 48 },
        { month: 'Nov', charleExpense: 310, steveExpense: 235, peterExpense: 78, johnExpense: 94 },
        { month: 'Dec', charleExpense: 370, steveExpense: 270, peterExpense: 150, johnExpense: 78 }
    ];

    public primaryXAxis: Object = {
        valueType: 'Category',
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        labelIntersectAction: 'None',
        labelStyle: { fontWeight: '500' },
        interval: 1
    };

    public primaryYAxis: Object = {
        labelFormat: '${value}k',
        minimum: 0,
        maximum: 400,
        interval: 100,
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        labelStyle: { fontWeight: '500' }
    };

    public chartLoad(args: any, lightTheme: string, darkTheme: string): void {
        args.chart.theme = this.isDarkMode ? darkTheme : lightTheme;
        this.resize();
    };

    @HostListener('window:resize')
    public resize(): void {
        let labelRotation = window.innerWidth <= 640 ? -90 : 0;
        this.primaryXAxis = { ...this.primaryXAxis, labelRotation: labelRotation };
        if (this.rangeDropdown.element.classList.contains('e-active')) {
            this.rangeDropdown.toggle();
        }
    };

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'area-chart-9' && blockData.theme) {
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
