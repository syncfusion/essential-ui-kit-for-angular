import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { DialogModule, DialogComponent, OpenEventArgs } from '@syncfusion/ej2-angular-popups';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { RichTextEditorAllModule, RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
import { TextBoxModule, UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-modals-9',
    standalone: true,
    imports: [DialogModule, DropDownListModule, RichTextEditorAllModule, TextBoxModule, UploaderModule, DatePickerModule, ButtonModule],
    templateUrl: './modals-9.component.html',
    styleUrl: './modals-9.component.css'
})
export class Modals9Component implements OnInit, OnDestroy {
    @ViewChild('dialog') public dialog!: DialogComponent;
    @ViewChild('rte') public rte!: RichTextEditorComponent;
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public isMobile: boolean = false;

    constructor() { }

    public ngOnInit(): void {
        /* SB Code - Start */
        window.addEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    public ngAfterViewInit(): void {
        setTimeout(() => {
            this.checkWindowSize();
        }, 200);
    }

    public ngOnDestroy(): void {
        /* SB Code - Start */
        window.removeEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    @HostListener('window:resize')
    public handleResize(): void {
        this.checkWindowSize();
    }

    public checkWindowSize(): void {
        this.isMobile = window.innerWidth <= 640;
        this.dialog.refresh();
        this.dialog.show(this.isMobile);
    }

    public dialogOpen(args: OpenEventArgs): void {
        args.preventFocus = true;
        setTimeout(() => {
            this.rte.refresh();
        }, 100);
    }

    public created(): void {
        const hiddenSelectElement = document.getElementsByClassName('e-ddl-hidden')[1];
        const IconElement = document.createElement('span');
        IconElement.style.cssText = 'display: flex; align-items: center; margin-left: 10px;';
        IconElement.className = 'e-icons e-medium e-user text-gray-500 dark:text-gray-300';
        (hiddenSelectElement as any).parentNode.insertBefore(IconElement, hiddenSelectElement);
    }

    /* SB Code - Start */
    private refreshDialog(timeout: number): void {
        setTimeout(() => {
            this.dialog.show(this.isMobile);
        }, timeout);
    }

    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'modals-9' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                    this.refreshDialog(500);
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
