import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-ai-chat-2',
    standalone: true,
    imports: [CommonModule, ListViewModule, ButtonModule],
    templateUrl: './ai-chat-2.component.html',
    styleUrl: './ai-chat-2.component.css'
})
export class AiChat2Component implements OnInit, OnDestroy {
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
            name: "You",
            time: "20m",
            text: "Make a description about this picture",
            category: "sender"
        },
        {
            id: "2",
            category: "reply",
            isList: true,
            resources: [
                {
                    text: "Visual AI Chat Interface",
                    description: "The image shows a person using a virtual reality viewer made of cardboard, possibly Google Cardboard, while standing indoors. They are facing a framed poster on the wall, which features a minimalist illustration of what appears to be a coffee-making process. The persons hair and sweater are visible, and they are positioned near a window, suggesting natural light in the room."
                }
            ]
        }
    ];

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-chat-2' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
