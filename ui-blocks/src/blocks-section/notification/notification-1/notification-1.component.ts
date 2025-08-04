import { Component, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { DialogModule, DialogComponent } from '@syncfusion/ej2-angular-popups';
import { TabModule, TabComponent, SelectEventArgs } from '@syncfusion/ej2-angular-navigations';
import { ListViewModule, ListViewComponent } from '@syncfusion/ej2-angular-lists';
import { DropDownButtonAllModule, DropDownButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
    selector: 'app-notification-1',
    standalone: true,
    imports: [CommonModule, ButtonModule, DialogModule, TabModule, ListViewModule, DropDownButtonAllModule],
    templateUrl: './notification-1.component.html',
    styleUrl: './notification-1.component.css'
})
export class Notification1Component {
    @ViewChild('dialog') public dialog!: DialogComponent;
    @ViewChild('button') public button!: ButtonComponent;
    @ViewChild('tab') tab!: TabComponent;
    @ViewChild('listview') listview!: ListViewComponent;
    @ViewChild('dropdown') public dropdown!: DropDownButtonComponent;
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

    public messageData: any[] = [
        {
            id: 1,
            avatar: 'avatar-8.jpg',
            initial: '',
            name: 'Jane Smith',
            content: 'wants to edit the Design System',
            time: '5 min ago',
            category: 'following'
        },
        {
            id: 2,
            avatar: 'avatar-5.jpg',
            initial: '',
            name: 'David Clark',
            content: 'added a file to Dark Mode',
            time: '1 hour ago',
            category: 'following'
        },
        {
            id: 3,
            avatar: '',
            initial: 'RL',
            colorTheme: 'Orange',
            name: 'Rachel Lee',
            content: 'finished created new component',
            time: '1:12 pm',
            category: 'archive'
        },
        {
            id: 4,
            avatar: '',
            initial: 'LG',
            colorTheme: 'Green',
            name: 'Lisa Green',
            content: 'mentioned you in Rewrite Button component',
            time: '1:52 pm',
            category: 'archive'
        }
    ];

    public toggleDialog(): void {
        this.isToggleState ? this.dialog.show() : this.dialog.hide();
        this.isToggleState = !this.isToggleState;
    };

    public onTabCreated(): void {
        setTimeout(() => {
            const badge = this.tab?.element.querySelector('.e-toolbar-item.e-active')?.querySelector('.e-badge');
            if (badge) {
                badge.classList.add('e-badge-primary');
            }
        }, 250);
    };

    public onTabSelected(args: SelectEventArgs): void {
        args.previousItem.querySelector('.e-badge')?.classList.remove('e-badge-primary');
        args.selectedItem.querySelector('.e-badge')?.classList.add('e-badge-primary');
        const selectedText = args.selectedItem?.querySelector('.e-tab-text')?.firstElementChild?.children[0]?.textContent?.trim().toLowerCase() ?? 'all';
        const filteredData = selectedText === 'all' ? this.messageData : this.messageData.filter(e => e.category?.toLowerCase() === selectedText);
        this.listview.dataSource = filteredData;
        this.listview.dataBind();
    };

    @HostListener('window:resize')
    public setDialogPosition(event: any): void {
        const position = this.button?.element?.getBoundingClientRect();
        if (position) {
            this.isMobileView = window.innerWidth < 480;
            this.dialog.width = this.isMobileView ? '328px' : '448px';
            this.dialog.position = { X: position.x - (parseInt(this.dialog.width, 10) - 32), Y: position.y + 37 };
        }
        if (this.dropdown.element.classList.contains('e-active')) {
            this.dropdown.toggle();
        }
        this.tab.refreshActiveTabBorder();
        if (event) event.preventFocus = true;
    };

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'notification-1' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
