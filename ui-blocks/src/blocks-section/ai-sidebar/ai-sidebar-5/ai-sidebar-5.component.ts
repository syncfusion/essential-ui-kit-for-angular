import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule, CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';

@Component({
    selector: 'app-ai-sidebar-5',
    standalone: true,
    imports: [SidebarModule, ButtonModule, CheckBoxModule, ListViewModule],
    templateUrl: './ai-sidebar-5.component.html',
    styleUrl: './ai-sidebar-5.component.css'
})
export class AiSidebar5Component implements OnInit, OnDestroy {
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public backDrop: boolean = window.innerWidth <= 660;

    public searchItems: Object[] = [
        {
            title: 'Generate 5 attention-grabbing headlines',
            subTitle: 'Get 5 compelling headlines to make your content stand out.'
        },
        {
            title: 'Text to emoji',
            subTitle: 'Convert plain text into expressive emoji-based messages.'
        },
        {
            title: 'What does a senior lead designer do?',
            subTitle: 'Understand key qualities and skills valued by senior leaders.'
        },
        {
            title: 'Article introduction',
            subTitle: 'Generate a strong and engaging introduction for your article.'
        }
    ];

    constructor() {}

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

    @HostListener('window:resize')
    public onResize(): void {
        this.backDrop = window.innerWidth <= 660;
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-sidebar-5' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
