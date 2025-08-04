import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule, ContextMenuModule, ContextMenuComponent, MenuItemModel} from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';

@Component({
    selector: 'app-ai-sidebar-4',
    standalone: true,
    imports: [CommonModule, SidebarModule, ContextMenuModule, ButtonModule, ListViewModule],
    templateUrl: './ai-sidebar-4.component.html',
    styleUrl: './ai-sidebar-4.component.css'
})
export class AiSidebar4Component implements OnInit, OnDestroy {
    @ViewChild('contextMenu') public contextMenu!: ContextMenuComponent;
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public backDrop: boolean = window.innerWidth <= 660;

    public chatHistory: Object[] = [
        {
            message: "AI Chat",
            category: "",
            fontIcon: "e-comment-show"
        },
        {
            message: "Settings",
            category: "",
            fontIcon: "e-settings"
        },
        {
            message: "FAQs",
            category: "",
            fontIcon: "sf-icon-help-circle"
        },
        {
            message: "How can I improve my time management skills?",
            category: "Pinned",
            fontIcon: "sf-icon-push-pin"
        },
        {
            message: "What's the best way to learn a new language effectively?",
            category: "Pinned",
            fontIcon: "sf-icon-push-pin"
        },
        {
            message: "What's the difference between anxiety and stress?",
            category: "Chat history",
            fontIcon: "e-clock"
        },
        {
            message: "How can I reduce stress at work and stay productive?",
            category: "Chat history",
            fontIcon: "e-clock"
        },
        {
            message: "What are some good health habits to start today?",
            category: "Chat history",
            fontIcon: "e-clock"
        },
        {
            message: "Should I get a pet if I live alone in an apartment?",
            category: "Chat history",
            fontIcon: "e-clock"
        },
        {
            message: "How much sleep do I really need each night?",
            category: "Chat history",
            fontIcon: "e-clock"
        }
    ];

    public menuItems: MenuItemModel[] = [
        {
            text: "Pin",
            iconCss: "sf-icon-push-pin"
        },
        {
            text: "Delete",
            iconCss: "e-icons e-trash"
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
    public handleResize(): void {
        this.backDrop = window.innerWidth <= 660;
    }

    public openContextMenu(event: MouseEvent): void {
        this.contextMenu.open(event.pageY + 20, event.pageX); 
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-sidebar-4' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
