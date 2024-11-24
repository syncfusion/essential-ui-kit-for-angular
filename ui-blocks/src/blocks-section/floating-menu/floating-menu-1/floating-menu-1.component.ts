import { Component, ViewChild, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, FabModule, Fab } from '@syncfusion/ej2-angular-buttons';
import { DialogModule, DialogComponent } from '@syncfusion/ej2-angular-popups';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';

@Component({
    selector: 'app-floating-menu-1',
    standalone: true,
    imports: [CommonModule, ButtonModule, FabModule, DialogModule, ListViewModule],
    templateUrl: './floating-menu-1.component.html',
    styleUrl: './floating-menu-1.component.css'
})
export class FloatingMenu1Component implements OnInit, OnDestroy {
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
            question: "How do I reset my password?",
            answer: "Detailed steps on resetting a forgotten password or changing an existing one."
        },
        {
            question: "How can I contact customer support?",
            answer: "Guidance on reaching out to customer service via chat, email, or phone."
        },
        {
            question: "How do I update my account information?",
            answer: "Instructions for editing personal details such as email address, phone number, or payment..."
        },
        {
            question: "What should I do if I can't log in?",
            answer: "Troubleshooting steps for login issues, including account lockouts or forgotten credentials."
        },
        {
            question: "How do I track my order?",
            answer: "Steps to track the status of an order, including shipping updates and expected delivery times."
        }
    ];

    public toggleDialog(): void {
        this.toggleState ? this.dialog.show() : this.dialog.hide();
        this.toggleState = !this.toggleState;
    }

    @HostListener('window:resize', ['$event'])
    public setDialogPosition(event: any): void {
        const position = this.fab?.element?.getBoundingClientRect();
        const dialogBounds = this.dialog?.element?.getBoundingClientRect();
        if (position || dialogBounds) {
            this.isMobileView = position.width === 0;
            this.dialog.position = this.isMobileView ? { X: 0, Y: 0 } : { X: position.x - (dialogBounds.width - 52), Y: position.y - (dialogBounds.height + 18) };
        }
        event.preventFocus = true;
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'floating-menu-1' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}