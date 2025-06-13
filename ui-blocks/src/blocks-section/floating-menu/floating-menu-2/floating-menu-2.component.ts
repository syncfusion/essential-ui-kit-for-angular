import { Component, ViewChild, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabModule, Fab } from '@syncfusion/ej2-angular-buttons';
import { DialogModule, DialogComponent } from '@syncfusion/ej2-angular-popups';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { RatingModule, TextBoxModule } from '@syncfusion/ej2-angular-inputs';

@Component({
    selector: 'app-floating-menu-2',
    standalone: true,
    imports: [CommonModule, FabModule, DialogModule, ListViewModule, RatingModule, TextBoxModule],
    templateUrl: './floating-menu-2.component.html',
    styleUrl: './floating-menu-2.component.css'
})
export class FloatingMenu2Component implements OnInit, OnDestroy {
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

    public data: Object[] = [
        {
            id: '1',
            time: '12:12 PM',
            contact: 'ChatBot',
            chat: 'Hello! How can I help you?'
        },
        {
            id: '2',
            time: '12:12 PM',
            contact: 'You',
            chat: "Hi, I'm having trouble accessing the company VPN."
        },
        {
            id: '3',
            time: '12:12 PM',
            contact: 'ChatBot',
            chat: 'I can help with that. Are you seeing any error messages?'
        }
    ];

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
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'floating-menu-2' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}