import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule, DialogComponent } from '@syncfusion/ej2-angular-popups';
import { TabModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule, SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { TextBoxModule, TextAreaModule, UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
  selector: 'app-modals-8',
  standalone: true,
  imports: [CommonModule, DialogModule, TabModule, ButtonModule, SwitchModule, DatePickerModule, TextBoxModule, TextAreaModule, UploaderModule, DropDownButtonModule],
  templateUrl: './modals-8.component.html',
  styleUrl: './modals-8.component.css'
})
export class Modals8Component implements OnInit, OnDestroy {
    @ViewChild('dialog') public dialog!: DialogComponent;
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public containerHeight: string = 'min-height: 750px;';
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

    @HostListener('window:resize', ['$event'])
    public onResize(): void {
        this.checkWindowSize();
    }

    public checkWindowSize(): void {
        this.isMobile = window.innerWidth < 640;
        this.containerHeight = this.isMobile ? 'min-height: 635px;' : 'min-height: 750px;';
        this.dialog.show(this.isMobile);
    }

    /* SB Code - Start */
    private refreshDialog(timeout: number): void {
        setTimeout(() => {
            this.dialog.refresh();
            this.dialog.show(this.isMobile);
        }, timeout);
    }

    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'modals-8' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                    this.refreshDialog(700);
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
