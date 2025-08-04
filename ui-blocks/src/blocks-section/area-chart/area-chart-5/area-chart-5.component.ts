import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownButtonModule, DropDownButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';
import { ChartAllModule, ChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-area-chart-5',
    standalone: true,
    imports: [ButtonModule, DropDownButtonModule, ChartAllModule],
    templateUrl: './area-chart-5.component.html'
})
export class AreaChart5Component implements OnInit, OnDestroy {
    @ViewChild('chart') public chart!: ChartComponent;
    @ViewChild('yearDropDown') public yearDropDown!: DropDownButtonComponent;
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
        { month: 'Jan', nike: 27, iPhone: 15, ps5: 6 },
        { month: 'Feb', nike: 30, iPhone: 20, ps5: 10 },
        { month: 'Mar', nike: 32, iPhone: 21, ps5: 9 },
        { month: 'Apr', nike: 39, iPhone: 14, ps5: 10 },
        { month: 'May', nike: 36, iPhone: 13, ps5: 9 },
        { month: 'Jun', nike: 33, iPhone: 14, ps5: 9 },
        { month: 'Jul', nike: 31, iPhone: 17, ps5: 4 },
        { month: 'Aug', nike: 32, iPhone: 17, ps5: 3 },
        { month: 'Sep', nike: 33, iPhone: 14, ps5: 4 },
        { month: 'Oct', nike: 30, iPhone: 13, ps5: 6 },
        { month: 'Nov', nike: 29, iPhone: 18, ps5: 4 },
        { month: 'Dec', nike: 35, iPhone: 20, ps5: 3 }
    ];

    public primaryXAxis: Object = {
        valueType: 'Category',
        labelPlacement: 'OnTicks',
        edgeLabelPlacement: 'Shift',
        interval: 1,
        labelIntersectAction: 'None',
        majorGridLines: { width: 0 },
        minorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        labelStyle: { fontWeight: '500' }
    };

    public primaryYAxis: Object = {
        minimum: 20,
        maximum: 70,
        interval: 10,
        labelFormat: '{value}k',
        labelStyle: { fontWeight: '500' },
        majorGridLines: { width: 1 },
        minorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        lineStyle: { width: 0 }
    };

    public chartLoad(args: any, lightTheme: string, darkTheme: string): void {
        args.chart.theme = this.isDarkMode ? darkTheme : lightTheme;
        this.resize();
    };

    @HostListener('window:resize')
    public resize(): void {
        let xAxisLabelRotation = window.innerWidth < 767 ? -90 : 0;
        this.primaryXAxis = { ...this.primaryXAxis, labelRotation: xAxisLabelRotation }
        if (this.yearDropDown.element.classList.contains('e-active')) {
            this.yearDropDown.toggle();
        }
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'area-chart-5' && blockData.theme) {
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