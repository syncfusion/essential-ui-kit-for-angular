import { Component, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, ChipListModule, ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { DialogModule, DialogComponent } from '@syncfusion/ej2-angular-popups';
import { TabModule } from '@syncfusion/ej2-angular-navigations';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { DropDownButtonAllModule, DropDownButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
    selector: 'app-notification-3',
    standalone: true,
    imports: [CommonModule, ButtonModule, ChipListModule, DialogModule, TabModule, ListViewModule, DropDownButtonAllModule],
    templateUrl: './notification-3.component.html',
    styleUrl: './notification-3.component.css'
})
export class Notification3Component {
    @ViewChild('dialog') public dialog!: DialogComponent;
    @ViewChild('button') public button!: ButtonComponent;
    @ViewChild('dropdown') public dropdown!: DropDownButtonComponent;
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

    public chatData: Object[] = [
        {
            id: 1,
            initial: 'LG',
            sender: 'Lisa Green',
            colorTheme: 'Green',
            content: 'Hi, Rachael Lee',
            time: '9:46 AM'
        },
        {
            id: 2,
            initial: 'OA',
            sender: 'Oliva Adams',
            colorTheme: 'Orange',
            content: 'Hi, David Clark',
            time: '9:46 AM'
        },
        {
            id: 3,
            initial: 'SM',
            sender: 'Sophia Martinez',
            colorTheme: 'Green',
            content: 'Hi, John wilson',
            time: '9:46 AM'
        },
        {
            id: 4,
            initial: 'TH',
            sender: 'Tom Harris',
            colorTheme: 'Red',
            content: 'Hi, Oliva Adams',
            time: '9:46 AM'
        },
        {
            id: 5,
            initial: 'SM',
            sender: 'Sophia Martinez',
            colorTheme: 'Green',
            content: 'Hi, Lucas Robinson',
            time: '9:46 AM'
        }
    ];

    public toggleDialog(): void {
        this.toggleState ? this.dialog.show() : this.dialog.hide();
        this.toggleState = !this.toggleState;
    };

    @HostListener('window:resize')
    public setDialogPosition(event: any): void {
        const position = this.button?.element?.getBoundingClientRect();
        if (position) {
            this.isMobileView = window.innerWidth < 480;
            this.dialog.width = this.isMobileView ? '328px ' : '448px';
            this.dialog.position = { X: position.x - (parseInt(this.dialog.width, 10) - 32), Y: position.y + 36 };
        }
        if (this.dropdown.element.classList.contains('e-active')) {
            this.dropdown.toggle();
        }
        event.preventFocus = true;
    };

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'notification-3' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
