import { Component, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { DialogModule, DialogComponent } from '@syncfusion/ej2-angular-popups';
import { TabModule } from '@syncfusion/ej2-angular-navigations';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { ProgressBarModule, ProgressBarComponent } from '@syncfusion/ej2-angular-progressbar';

@Component({
    selector: 'app-notification-2',
    standalone: true,
    imports: [CommonModule, ButtonModule, DialogModule, TabModule, ListViewModule, ProgressBarModule],
    templateUrl: './notification-2.component.html',
    styleUrl: './notification-2.component.css'
})
export class Notification2Component {
    @ViewChild('dialog') public dialog!: DialogComponent;
    @ViewChild('button') public button!: ButtonComponent;
    @ViewChild('progressbar') public progressbar!: ProgressBarComponent;
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public isToggleState: boolean = false;
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

    public notificationData: Object[] = [
        {
            id: 1,
            avatar: 'avatar-2.jpg',
            sender: 'Lucas Robinson',
            content: 'Hey, can you check the latest documents posted in the group?',
            time: '1 day'
        },
        {
            id: 2,
            avatar: 'avatar-5.jpg',
            sender: 'David Clark',
            content: 'Hey, can you check the latest documents posted in the group?',
            time: '4 day'
        }
    ];

    public toggleDialog(): void {
        this.isToggleState ? this.dialog.show() : this.dialog.hide();
        this.isToggleState = !this.isToggleState;
    };

    @HostListener('window:resize')
    public setDialogPosition(event: any): void {
        const position = this.button?.element?.getBoundingClientRect();
        if (position) {
            this.isMobileView = window.innerWidth < 480;
            this.dialog.width = this.isMobileView ? '328px' : '448px';
            this.dialog.position = { X: position.x - (parseInt(this.dialog.width, 10) - 32), Y: position.y + 36 };
        }
        setTimeout(() => {
            this.progressbar.refresh();
        }, 200);
        if (event) event.preventFocus = true;
    };

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'notification-2' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
