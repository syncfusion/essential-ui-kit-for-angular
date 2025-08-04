import { Component, ViewChild, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, FabModule, Fab } from '@syncfusion/ej2-angular-buttons';
import { DialogModule, DialogComponent } from '@syncfusion/ej2-angular-popups';
import { TextBoxModule, TextAreaModule, UploaderModule } from '@syncfusion/ej2-angular-inputs';

@Component({
    selector: 'app-floating-menu-3',
    standalone: true,
    imports: [CommonModule, ButtonModule, FabModule, DialogModule, TextBoxModule, TextAreaModule, UploaderModule],
    templateUrl: './floating-menu-3.component.html',
    styleUrl: './floating-menu-3.component.css'
})
export class FloatingMenu3Component implements OnInit, OnDestroy {
    @ViewChild('dialog') public dialog!: DialogComponent;
    @ViewChild('fab') public fab!: Fab;
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public isToggleState: boolean = false;
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
        this.isToggleState ? this.dialog.show() : this.dialog.hide();
        this.isToggleState = !this.isToggleState;
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
                if (blockData.name === 'floating-menu-3' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}