import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule, DialogComponent } from '@syncfusion/ej2-angular-popups';
import { SidebarModule, SidebarComponent, EventArgs } from '@syncfusion/ej2-angular-navigations';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { ButtonModule, SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { MessageModule } from '@syncfusion/ej2-angular-notifications';

@Component({
    selector: 'app-modals-10',
    standalone: true,
    imports: [CommonModule, DialogModule, SidebarModule, TextBoxModule, ListViewModule, ButtonModule, SwitchModule, MessageModule],
    templateUrl: './modals-10.component.html',
    styleUrl: './modals-10.component.css'
})
export class Modals10Component implements OnInit, OnDestroy {
    @ViewChild('dialog') public dialog!: DialogComponent;
    @ViewChild('sidebar') public sidebar!: SidebarComponent;
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public isMobile: boolean = false;
    public isModal: boolean = true;
    public dockMode: boolean = true;
    public backDrop: boolean = false;
    public sidebarType: string = 'Auto';

    public navigationMenu: Object[] = [
        { id: 1, categoryName: 'Account Settings', field: 'My Account', fontIcon: 'e-user' },
        { id: 2, categoryName: 'Account Settings', field: 'Subscription', fontIcon: 'sf-icon-star-02' },
        { id: 3, categoryName: 'General Preferences', field: 'Appearance', fontIcon: 'e-brightness' },
        { id: 4, categoryName: 'General Preferences', field: 'Advanced', fontIcon: 'e-adjustment' },
        { id: 5, categoryName: 'General Preferences', field: 'About', fontIcon: 'e-circle-info' }
    ];

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
        this.isMobile = window.innerWidth <= 660;
        this.dockMode = !this.isMobile;
        this.backDrop = this.isMobile;
        this.sidebarType = this.isMobile ? 'Over' : 'Auto';
        this.dialog.refresh();
        this.dialog.show(this.isMobile);
    }

    public onSidebarClose(args: EventArgs): void {
        if (!this.isMobile) {
            args.cancel = true;
        }
    }

    /* SB Code - Start */
    private refreshDialog(timeout: number): void {
        setTimeout(() => {
            this.sidebar.refresh();
            this.dialog.refresh();
            this.dialog.show(this.isMobile);
        }, timeout);
    }

    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'modals-10' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                    this.refreshDialog(1000);
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
