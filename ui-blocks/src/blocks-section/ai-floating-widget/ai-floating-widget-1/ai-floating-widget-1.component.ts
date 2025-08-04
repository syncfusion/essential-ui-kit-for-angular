import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AIAssistViewModule, PromptModel, AIAssistViewComponent } from '@syncfusion/ej2-angular-interactive-chat';
import { DialogModule, DialogComponent } from '@syncfusion/ej2-angular-popups';
import { ButtonModule, FabModule, Fab } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-ai-floating-widget-1',
    standalone: true,
    imports: [CommonModule, AIAssistViewModule, DialogModule, ButtonModule, FabModule],
    templateUrl: './ai-floating-widget-1.component.html',
    styleUrl: './ai-floating-widget-1.component.css'
})
export class AiFloatingWidget1Component implements OnInit, OnDestroy {
    @ViewChild('aiAssistViewComponent') public aiAssistViewComponent!: AIAssistViewComponent;
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

    public promptMessages: PromptModel[] = [
        {
            response: "Hi there. I'm the AI Assistant. How can I help you today?"
        }
    ];
    
    public onPromptRequest(): void {
        setTimeout(() => {
            let defaultResponse = "For real-time prompt processing, connect AI AssistView to your AI service, such as OpenAI or Azure Cognitive Services, using API credentials.";
            this.aiAssistViewComponent.addPromptResponse(defaultResponse);
        }, 1000);
    };

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
                if (blockData.name === 'ai-floating-widget-1' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
