import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { DialogModule, DialogComponent } from '@syncfusion/ej2-angular-popups';
import { StepperModule, StepperComponent } from '@syncfusion/ej2-angular-navigations';
import { TextAreaModule, UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-ai-dialog-1',
    standalone: true,
    imports: [DialogModule, StepperModule, TextAreaModule, UploaderModule, ButtonModule],
    templateUrl: './ai-dialog-1.component.html',
    styleUrl: './ai-dialog-1.component.css'
})
export class AiDialog1Component implements OnInit, OnDestroy {
    @ViewChild('dialog') public dialog!: DialogComponent;
    @ViewChild('stepper') public stepper!: StepperComponent;
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public isMobileView: boolean = false;

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

    @HostListener('window:resize')
    public onResize(): void {
        this.checkWindowSize();
    }

    public checkWindowSize(): void {
        this.isMobileView = window.innerWidth < 640;
        this.dialog.refresh();
        this.dialog.show(this.isMobileView);
    }

    /* SB Code - Start */
    private refreshDialog(timeout: number): void {
        setTimeout(() => {
            this.dialog.show(this.isMobileView);
            this.stepper.refresh();
        }, timeout);
    }

    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-dialog-1' && blockData.theme) {
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
