import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingModule, TextAreaModule } from '@syncfusion/ej2-angular-inputs';
import { DialogModule, DialogComponent } from '@syncfusion/ej2-angular-popups';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { ButtonModule, CheckBoxModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-rating-17',
    imports: [CommonModule, RatingModule, TextAreaModule, DialogModule, DropDownListModule, ButtonModule, CheckBoxModule],
    templateUrl: './rating-17.component.html',
    styleUrl: './rating-17.component.css'
})
export class Rating17Component implements OnInit, OnDestroy {
    @ViewChild('dialog') public dialog!: DialogComponent;
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

    public ngOnDestroy(): void {
        /* SB Code - Start */
        window.removeEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    @HostListener('window:resize')
    public handleResize(): void {
        this.isMobile = window.innerWidth <= 640;
        this.dialog.refresh();
        this.dialog.show(this.isMobile);
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
                if (blockData.name === 'rating-17' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                    this.refreshDialog(250);
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}