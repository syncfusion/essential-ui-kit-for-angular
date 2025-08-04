import { Component, OnInit, OnDestroy, HostListener, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownButtonModule, DropDownButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';
import { ChartAllModule, ChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-line-chart-6',
    standalone: true,
    imports: [ButtonModule, DropDownButtonModule, ChartAllModule],
    templateUrl: './line-chart-6.component.html'
})
export class LineChart6Component implements OnInit, OnDestroy {
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

    public chartData: Object[] = this.generateBudgetData();

    public generateBudgetData(): Object[] {
        const startDate = new Date(2024, 0, 1);
        const endDate = new Date(2025, 1, 20);
        const data: any[] = [];
        let i = 0;

        while (true) {
            const date = new Date(startDate.getTime());
            date.setDate(startDate.getDate() + i * 10);

            if (date > endDate) break;

            const xData = 11000 + Math.random() * 11000 + Math.sin(i) * 3000;
            const yData = 5000 + Math.random() * 5000 + Math.cos(i) * 2000;

            data.push({
                date,
                xAxis: Math.round(xData),
                yAxis: Math.round(yData)
            });

            i++;
        }

        return data;
    };

    public primaryXAxis: Object = {
        valueType: "DateTime",
        labelFormat: "MMM dd, yyyy",
        labelStyle: {size: "0"},
        crosshairTooltip: { enable: true }
    };

    public primaryYAxis: Object = {
        labelStyle: { size: '0px' }
    };

    public tooltip: Object = {
        enable: true,
        shared: true,
        format: '${series.name}: $${point.y}',
        showHeaderLine: false
    };

    public legendSettings: Object = {
        visible: true,
        position: 'Top',
        alignment: 'Near',
        height: '40px'
    };

    public crosshair: Object = {
        enable: true,
        lineType: 'Vertical',
        snapToData: true,
        dashArray: '5,5',
        line: { width: '2px' }
    };

    public annotations(): any[] {
        return [
            {
                content: `<div style="display: flex; flex-direction: column; align-items: center;"><div style="width: 2px; height: 320px; border-right:2px dashed #9CA3AF;"></div><div style="width: 10px; height: 10px; border-radius: 50%; margin-top: 2px;background-color: ${this.isDarkMode ? '#FFFFFF' : '#212529'};}"></div><div style="font-size: 12px; font-weight: 500; margin-top: 2px; text-align: center;color: ${this.isDarkMode ? '#FFFFFF' : '#212529'};">Dec 6, 2024</div></div>`,
                x: '84%',
                y: '57%',
                coordinateUnits: 'Pixel',
                region: 'Chart'
            }
        ];
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
                if (blockData.name === 'line-chart-6' && blockData.theme) {
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
