import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-ai-chat-1',
    standalone: true,
    imports: [CommonModule, ListViewModule, ButtonModule],
    templateUrl: './ai-chat-1.component.html',
    styleUrl: './ai-chat-1.component.css'
})
export class AiChat1Component implements OnInit, OnDestroy {
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

    public promptData: Object[] = [
        {
            id: "1",
            text: "Suggest 3 websites about ethical hacking",
            category: "sender"
        },
        {
            id: "2",
            category: "reply",
            isList: true,
            resources: [
                {
                    type: "header",
                    text: "Here are four websites where you can improve your ethical hacking skills:"
                },
                {
                    type: "resource",
                    text: "Cybrary (cybrary.it):",
                    description: " Cybrary offers a wide range of free and paid courses on cybersecurity, including ethical hacking. There are beginner to advanced level courses that cover various aspects of cybersecurity, including penetration testing and threat intelligence.",
                },
                {
                    type: "resource",
                    text: "Hack The Box (hackthebox.eu): ",
                    description: " Hack The Box is an online platform that allows you to practice penetration testing and improve your hacking skills through challenges and labs. It's a great way to learn by doing, and you can interact with a large community of ethical hackers.",
                },
                {
                    type: "resource",
                    text: "Offensive Security (offensive-security.com): ",
                    description: " Known for their OSCP (Offensive Security Certified Professional) certification, Offensive Security provides high-quality training for ethical hackers. Their courses are comprehensive and widely recognized in the industry."
                }
            ]
        }
    ];

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-chat-1' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
