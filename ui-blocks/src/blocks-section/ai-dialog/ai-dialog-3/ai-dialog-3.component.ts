import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { DialogModule, DialogComponent } from '@syncfusion/ej2-angular-popups';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { ButtonModule, RadioButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-ai-dialog-3',
    standalone: true,
    imports: [DialogModule, TextBoxModule, ButtonModule, RadioButtonModule],
    templateUrl: './ai-dialog-3.component.html',
    styleUrl: './ai-dialog-3.component.css'
})
export class AiDialog3Component implements OnInit, OnDestroy {
    @ViewChild('dialog') public dialog!: DialogComponent;
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
    public handleResize(): void {
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
            this.dialog.refresh();
            this.dialog.show(this.isMobileView);
        }, timeout);
    }

    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-dialog-3' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                    this.refreshDialog(300);
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
