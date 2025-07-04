import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { TextAreaModule, TextAreaComponent } from '@syncfusion/ej2-angular-inputs';
import { ButtonModule, ChipListModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-ai-input-2',
    standalone: true,
    imports: [TextAreaModule, ButtonModule, ChipListModule],
    templateUrl: './ai-input-2.component.html',
    styleUrl: './ai-input-2.component.css'
})
export class AiInput2Component implements OnInit, OnDestroy {
    @ViewChild('textarea') public textarea!: TextAreaComponent;
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

    @HostListener('window:resize')
    public onResize(): void {
        this.adjustHeight();
    }

    public adjustHeight(): void {
        const textarea = this.textarea.element as HTMLTextAreaElement;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-input-2' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                    setTimeout(() => {
                        this.adjustHeight();
                    }, 200);
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
