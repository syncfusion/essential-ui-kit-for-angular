import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';

@Component({
    selector: 'app-chat-1',
    standalone: true,
    imports: [CommonModule, ListViewModule, ButtonModule, TextBoxModule],
    templateUrl: './chat-1.component.html',
    styleUrl: './chat-1.component.css'
})
export class Chat1Component implements OnInit, OnDestroy {
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */

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
            id: 1,
            name: "John",
            time: "8:57 AM",
            avatar: '',
            text: "Hi, I'm having trouble accessing the company VPN.",
            chat: "sender",
            open: false
        },
        {
            id: 2,
            name: "Mark Davis",
            time: "9:00 AM",
            avatar: "avatar-3.jpg",
            text: "Hello! I can help with that. Are you seeing any error messages?",
            chat: "receiver"
        },
        {
            id: 1,
            name: "John",
            time: "9:05 AM",
            avatar: "",
            text: 'Yes, it says "VPN connection failed. Authentication error."',
            chat: "sender",
            open: false
        },
        {
            id: 2,
            name: "Mark Davis",
            time: "10:00 AM",
            avatar: "avatar-3.jpg",
            text: "Thanks for the details. Can you confirm if you've recently changed your network password?",
            chat: "receiver"
        },
        {
            id: 1,
            name: "John",
            time: "10:32 AM",
            avatar: "",
            text: "Yes, I changed it yesterday.",
            chat: "sender",
            open: true
        },
        {
            id: 2,
            name: "Mark Davis",
            time: "10:35 AM",
            avatar: "avatar-3.jpg",
            text: "That's likely the issue. The VPN might still be using the old password. Try updating your VPN credentials with the new password.",
            chat: "receiver"
        }
    ];

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'chat-1' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}