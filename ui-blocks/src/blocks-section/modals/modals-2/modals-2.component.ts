import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule, DialogComponent } from '@syncfusion/ej2-angular-popups';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';

@Component({
    selector: 'app-modals-2',
    standalone: true,
    imports: [CommonModule, DialogModule, ButtonModule, DropDownListModule, TextBoxModule],
    templateUrl: './modals-2.component.html',
})
export class Modals2Component implements OnInit, OnDestroy {
    @ViewChild('dialog') public dialog!: DialogComponent;
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
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

    @HostListener('window:resize')
    public onResize(): void {
        this.checkWindowSize();
    }

    public checkWindowSize(): void {
        this.isMobile = window.innerWidth <= 640;
        this.dialog.show(this.isMobile);
    }

    /* SB Code - Start */
    private refreshDialog(timeout: number): void {
        setTimeout(() => {
            this.dialog.show(this.isMobile);
        }, timeout);
    }

    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'modals-2' && blockData.theme) {
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
