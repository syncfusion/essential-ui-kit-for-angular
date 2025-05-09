import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { DialogModule, DialogComponent } from '@syncfusion/ej2-angular-popups';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ButtonModule, CheckBoxModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-modals-7',
    standalone: true,
    imports: [DialogModule, DropDownListModule, TextBoxModule, DatePickerModule, ButtonModule, CheckBoxModule],
    templateUrl: './modals-7.component.html',
    styleUrl: './modals-7.component.css'
})
export class Modals7Component implements OnInit, OnDestroy {
    @ViewChild('dialog') public dialog!: DialogComponent;
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */

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
    public onResize(): void {
        this.checkWindowSize();
    }

    public checkWindowSize(): void {
        const isMobile = window.innerWidth <= 640;
        this.dialog.refresh();
        this.dialog.show(isMobile);
    }

    public onCreated(args: number, icon: string): void {
        const hiddenSelectElement = document.getElementsByClassName('e-ddl-hidden')[args];
        const iconElement = document.createElement('span');
        iconElement.style.cssText = 'display: flex; align-items: center; margin-left: 10px;';
        iconElement.className = `e-icons e-medium ${icon} text-gray-500 dark:text-gray-300`;
        (hiddenSelectElement as HTMLElement).parentNode?.insertBefore(iconElement, hiddenSelectElement);
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'modals-7' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
