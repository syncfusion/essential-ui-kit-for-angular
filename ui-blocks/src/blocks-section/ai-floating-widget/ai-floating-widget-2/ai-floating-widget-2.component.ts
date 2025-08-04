import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule, DialogComponent } from '@syncfusion/ej2-angular-popups';
import { TextBoxModule, TextAreaModule, UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { ButtonModule, FabModule, Fab } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-ai-floating-widget-2',
    standalone: true,
    imports: [CommonModule, DialogModule, TextBoxModule, TextAreaModule, UploaderModule, ButtonModule, FabModule],
    templateUrl: './ai-floating-widget-2.component.html',
    styleUrl: './ai-floating-widget-2.component.css'
})
export class AiFloatingWidget2Component implements OnInit, OnDestroy {
    @ViewChild('dialog') public dialog!: DialogComponent;
    @ViewChild('fab') public fab!: Fab;
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public toggleState: boolean = false;
    public isMobileView: boolean = window.innerWidth < 640;

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

    public toggleDialog(): void {
        this.toggleState ? this.dialog.show() : this.dialog.hide();
        this.toggleState = !this.toggleState;
    }

    @HostListener('window:resize')
    public setDialogPosition(event: any): void {
        const position = this.fab?.element?.getBoundingClientRect();
        const dialogBounds = this.dialog?.element?.getBoundingClientRect();
        if (position || dialogBounds) {
            this.isMobileView = position.width === 0;
            this.dialog.position = this.isMobileView ? { X: 0, Y: 0 } : { X: position.x - (dialogBounds.width - 52), Y: position.y - (dialogBounds.height + 18) };
        }
        if (event) event.preventFocus = true;
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-floating-widget-2' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
