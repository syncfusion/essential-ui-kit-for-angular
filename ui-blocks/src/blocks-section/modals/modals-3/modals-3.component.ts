import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { DialogModule, DialogComponent } from '@syncfusion/ej2-angular-popups';
import { StepperModule, AccordionModule } from '@syncfusion/ej2-angular-navigations';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { SwitchModule, ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-modals-3',
  standalone: true,
  imports: [DialogModule, StepperModule, AccordionModule, TextBoxModule, DropDownListModule, SwitchModule, ButtonModule],
  templateUrl: './modals-3.component.html',
  styleUrl: './modals-3.component.css'
})
export class Modals3Component implements OnInit, OnDestroy {
    @ViewChild('dialog') public dialog!: DialogComponent;
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public labelPos: string = 'Bottom';
    public stepperOrientation: string ='horizontal';
    public stepperStyle: string = 'min-width: 500px;';
    public isMobile: boolean = false;

    constructor() { }

    public ngOnInit(): void {
        /* SB Code - Start */
        window.addEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    public ngAfterViewInit(): void {
        setTimeout(() => {
            this.checkWindowSize();
        }, 200);
    }

    public ngOnDestroy(): void {
        /* SB Code - Start */
        window.removeEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    @HostListener('window:resize', ['$event'])
    public onResize(): void {
        this.checkWindowSize();
    }

    public checkWindowSize(): void {
        this.isMobile = window.innerWidth < 640;
        this.stepperOrientation = this.isMobile ? 'vertical' : 'horizontal';
        this.stepperStyle = this.isMobile ? 'min-height: 240px;' : 'min-width: 500px;';
        this.labelPos = this.isMobile ? 'end' : 'bottom';
        this.dialog.refresh();
        this.dialog.show(this.isMobile);
    }

    /* SB Code - Start */
    private refreshDialog(timeout: number): void {
        setTimeout(() => {
            this.dialog.refresh();
            this.dialog.show(this.isMobile);
        }, timeout);
    }

    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'modals-3' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                    this.refreshDialog(700);
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
