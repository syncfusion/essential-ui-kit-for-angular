import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { DropDownButtonModule, DropDownButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';
import { ChartAllModule, ChartComponent } from '@syncfusion/ej2-angular-charts'; 

@Component({
    selector: 'app-area-chart-4',
    standalone: true,
    imports: [DropDownButtonModule, ChartAllModule],
    templateUrl: './area-chart-4.component.html'
})
export class AreaChart4Component implements OnInit, OnDestroy {
    @ViewChild('chart') public chart!: ChartComponent;
    @ViewChild('yearDropDown') public yearDropDown!: DropDownButtonComponent;
    @ViewChild('userMenuDropDown') public userMenuDropDown!: DropDownButtonComponent;
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
        { month: 'Jan', teens: 0, youngAdults: 0, adults: 0 },
        { month: 'Feb', teens: 250, youngAdults: 70, adults: 100 },
        { month: 'Mar', teens: 200, youngAdults: 100, adults: 120 },
        { month: 'Apr', teens: 80, youngAdults: 120, adults: 80 },
        { month: 'May', teens: 60, youngAdults: 200, adults: 70 },
        { month: 'Jun', teens: 150, youngAdults: 250, adults: 160 },
        { month: 'Jul', teens: 180, youngAdults: 200, adults: 140 },
        { month: 'Aug', teens: 110, youngAdults: 300, adults: 100 },
        { month: 'Sep', teens: 130, youngAdults: 463, adults: 150 },
        { month: 'Oct', teens: 190, youngAdults: 400, adults: 190 },
        { month: 'Nov', teens: 160, youngAdults: 180, adults: 100 },
        { month: 'Dec', teens: 30, youngAdults: 50, adults: 40 }
    ];

    public primaryXAxis: Object = {
        valueType: 'Category',
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        minorGridLines: { width: 0 },
        labelStyle: { fontWeight: '500' },
        labelIntersectAction: 'None',
        interval: 1,
        lineStyle: { width: 0 },
        edgeLabelPlacement: 'Shift',
        labelPlacement: 'OnTicks'
    };

    public primaryYAxis: Object = {
        lineStyle: { width: 0 },
        majorGridLines: { width: 1 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        minorGridLines: { width: 0 },
        labelFormat: '{value}',
        edgeLabelPlacement: 'Shift',
        labelStyle: { fontWeight: '500' },
        minimum: 0,
        maximum: 500,
        interval: 100
    };

    public tooltip: Object = {
        enable: true,
        enableMarker: false,
        header: '',
        showNearestTooltip: true,
        format: '<b>${point.y} ↑</b>'
    };

    public chartLoad(args: any, lightTheme: string, darkTheme: string): void {
        args.chart.theme = this.isDarkMode ? darkTheme : lightTheme;
        this.resize();
    };

    @HostListener('window:resize')
    public resize(): void {
        let xAxisLabelRotation = window.innerWidth < 767 ? -90 : 0;
        this.primaryXAxis = { ...this.primaryXAxis, labelRotation:  xAxisLabelRotation }
        this.closeDropdown(this.yearDropDown);
        this.closeDropdown(this.userMenuDropDown);
    }

    public closeDropdown(dropdown: DropDownButtonComponent): void {
        if (dropdown.element.classList.contains('e-active')) {
            dropdown.toggle();
        }
    };

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'area-chart-4' && blockData.theme) {
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
