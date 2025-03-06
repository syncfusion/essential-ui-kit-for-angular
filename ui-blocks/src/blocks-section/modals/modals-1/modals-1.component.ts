import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule, DialogComponent } from '@syncfusion/ej2-angular-popups';
import { TextBoxModule, UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { ButtonModule, CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';

@Component({
  selector: 'app-modals-1',
  standalone: true,
  imports: [CommonModule, DialogModule, TextBoxModule, UploaderModule, DropDownListModule, ButtonModule, CheckBoxModule, DatePickerModule],
  templateUrl: './modals-1.component.html',
  styleUrl: './modals-1.component.css'
})
export class Modals1Component implements OnInit, OnDestroy {
    @ViewChild('dialog') public dialog!: DialogComponent;
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public containerHeight: string = 'min-height: 826px;';

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

    @HostListener('window:resize', ['$event'])
    public onResize(): void {
        this.checkWindowSize();
    }

    public checkWindowSize(): void {
        const isMobile = window.innerWidth <= 640;
        this.containerHeight = isMobile ? 'min-height: 726px;' : 'min-height: 826px;';
        this.dialog.refresh();
        this.dialog.show(isMobile);
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'modals-1' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
