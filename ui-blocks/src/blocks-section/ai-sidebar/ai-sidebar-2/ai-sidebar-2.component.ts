import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';

@Component({
    selector: 'app-ai-sidebar-2',
    standalone: true,
    imports: [SidebarModule, ButtonModule, ListViewModule],
    templateUrl: './ai-sidebar-2.component.html',
    styleUrl: './ai-sidebar-2.component.css'
})
export class AiSidebar2Component implements OnInit, OnDestroy {
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public backDrop: boolean = window.innerWidth <= 660;

    public chatHistory: Object[] = [
        { 
            message: 'How do I design an interface for a mobile application?', 
            category: 'Today' 
        },
        { 
            message: 'What is design?', 
            category: 'Yesterday' 
        },
        { 
            message: 'How is visual hierarchy achieved?', 
            category: 'Yesterday' 
        },
        { 
            message: 'FAANG design practices', 
            category: 'Yesterday' 
        },
        { 
            message: 'Quantitative research types', 
            category: 'Yesterday' 
        }
    ];

    public supportMenu: Object[] = [
        {
            field: 'Settings',
            fontIcon: 'e-settings'
        },
        {
            field: 'Download for iOS',
            fontIcon: 'e-rectangle'
        },
        {
            field: 'AI Policy',
            fontIcon: 'e-upload-1'
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

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-sidebar-2' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
