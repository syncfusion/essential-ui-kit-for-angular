import { Component, HostListener, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ButtonModule, RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { StepperModule, StepperComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-returns-4',
    standalone: true,
    imports: [StepperModule, ButtonModule, RadioButtonModule],
    templateUrl: './returns-4.component.html'
})
export class Returns4Component implements OnInit, OnDestroy {
    /* SB Code - Start */
    @ViewChild('stepper') public stepper!: StepperComponent;
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public stepperStyle: string = '';
    public stepperOrientation: 'horizontal' | 'vertical' = 'horizontal';
    public labelPos: string = 'bottom';

    constructor() { }

    public ngOnInit(): void {
        /* SB Code - Start */
        window.addEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
        this.checkWindowSize(window.innerWidth);
    }

    /* SB Code - Start */
    public ngAfterViewInit(): void {
        this.refreshStepper(2000);
    }
    /* SB Code - End */

    public ngOnDestroy(): void {
        /* SB Code - Start */
        window.removeEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    @HostListener('window:resize', ['$event'])
    public handleResize(event: UIEvent): void {
        const width = (event.target as Window).innerWidth;
        this.checkWindowSize(width);
        /* SB Code - Start */
        this.stepper.refresh();
        /* SB Code - End */
    }

    private checkWindowSize(width: number): void {
        const isVertical = width < 640;
        this.stepperOrientation = isVertical ? 'vertical' : 'horizontal';
        this.stepperStyle = isVertical ? 'min-height:286px' : '';
        this.labelPos = isVertical ? 'end' : 'bottom';
    }

    /* SB Code - Start */
    private refreshStepper(timeout: number): void {
        setTimeout(() => {
            this.stepper.refreshProgressbar();
        }, timeout);
    }

    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'returns-4' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
        this.refreshStepper(1000);
    };
    /* SB Code - End */
}
