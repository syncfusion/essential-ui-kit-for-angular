import { Component, OnInit, OnDestroy, HostListener, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownButtonModule, DropDownButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';
import { ChartAllModule, ChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-line-chart-2',
    standalone: true,
    imports: [ButtonModule, DropDownButtonModule, ChartAllModule],
    templateUrl: './line-chart-2.component.html'
})
export class LineChart2Component implements OnInit, OnDestroy {
    @ViewChild('chart') public chart!: ChartComponent;
    @ViewChild('metricDropdown') public metricDropdown!: DropDownButtonComponent;
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public isDarkMode: boolean = false;

    constructor() { }

    public ngOnInit(): void {
        /* SB Code - Start */
        window.addEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
        this.setChartData();
    }

    public ngOnDestroy(): void {
        /* SB Code - Start */
        window.removeEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    public chartData: Object[] = [];
    public rainFallData: number[] = [
        6.279319488350383, 6.44063341316797, 6.2369215935932125, 5.502712120699334, 8.36727387645628,
        6.8763936909119145, 7.539107641248687, 7.168106790298325, 5.088973211088473, 7.3611443626521975,
        6.262482500009694, 7.066946128264099, 7.919136663279815, 6.048770230229623, 6.635693738128687,
        6.914314060997675, 7.3558393638632245, 7.446799394011705, 6.573065012367965, 7.199248800046284,
        7.2478392502172255, 5.841749916549048, 6.2875032915742555, 7.780344597533645, 7.476252964940152,
        7.31130789349302, 6.9795490749342735, 5.25771395445122, 5.209178065323029, 7.253001207479784,
        7.735630771065614, 7.867579691619466, 6.498505124379967, 7.520182796274494, 6.8849552121955355,
        8.409548532300903, 7.280962677695648, 5.90472258083289, 5.493050947663577, 8.049930030095826,
        7.312239096474201, 6.648881892334176, 8.20778156490454, 7.760450642162979, 7.16896788902378,
        6.464002823190773, 6.744274412468741, 7.608063016119123, 8.28437415597541, 6.0686292110951,
        6.903464462707268, 6.21583898264024, 6.593313193313992, 8.173631463364867, 6.2071625059658535,
        6.418795393716696, 6.564866596674945, 7.762970761208759, 6.69332473846462, 6.1351463701281865,
        7.022493415476658, 5.6249468419041895, 7.874458629000931, 5.990122152134347, 6.813180297026457,
        6.193695064120531, 5.296018389402549, 5.17260081829393, 8.408367813193978, 5.021357760833318,
        5.459118447495531, 8.323738731410392, 5.260751854138992, 7.7013503613788545, 7.161869425083509,
        6.4418768926289145, 5.7231475724513015, 5.364349621131238, 6.773111815759874, 8.306374671332607,
        6.165757722561587, 8.011545688002819, 5.701686949133615, 5.811580507651204, 7.948649630117358,
        8.048489436166571, 6.786435040503838, 7.1266629301054945, 7.091275551544603, 8.413378363384973,
        7.589335230735911, 5.5681611987571165, 5.176557932530318, 6.890754293090578, 7.924184435766012,
        7.671728565183779, 6.534081554237517, 6.078696508169291, 6.722649936820086, 8.13565939847763,
        5.322671901142255, 5.876995219513782, 6.5405777428501555, 8.127136324134698, 6.843787638022269,
        8.214383813349539, 7.091099148563872, 5.573444163129094, 6.1157593307379905, 5.363258884106331
    ];

    public palettes: string[] = ['#91BD34', '#FFB900', '#DE4383', '#01A8B5', '#91BD34', '#DE4383', '#267DDA', '#01A8B5', '#D83B01', '#9CA3AF'];

    public primaryXAxis: Object = {
        valueType: 'DateTime',
        labelFormat: 'y',
        intervalType: 'Years',
        edgeLabelPlacement: 'Shift',
        majorGridLines: { width: 0 },
        labelStyle: { fontWeight: '500' },
        interval: 1
    };

    public primaryYAxis: Object = {
        minimum: 10,
        maximum: 30,
        interval: 5,
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        labelStyle: { fontWeight: '500' }
    };

    public tooltip: Object = {
        enable: true,
        shared: true,
        format: '<b>${point.x} : ${point.y} in</b>',
        header: '<b>Rainfall</b>'
    };

    public chartLoad(args: any, lightTheme: string, darkTheme: string): void {
        args.chart.theme = this.isDarkMode ? darkTheme : lightTheme;
    };

    public setChartData(): void {
        this.chartData = this.rainFallData.map((value: number, index: number) => {
            return {
                x: new Date(2024, -index, 1),
                y: (value * 3).toFixed(1),
                color: this.palettes[Math.floor(index / 11)]
            };
        });
    };

    @HostListener('window:resize')
    public resize(): void {
        let labelRotation = window.innerWidth < 400 ? -90 : 0;
        this.primaryXAxis = { ...this.primaryXAxis, labelRotation: labelRotation }
        if (this.metricDropdown.element.classList.contains('e-active')) {
            this.metricDropdown.toggle();
        }
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'line-chart-2' && blockData.theme) {
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
