import { Component, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { SidebarModule, TabModule, TabComponent } from '@syncfusion/ej2-angular-navigations';
import { ListViewModule, ListViewComponent } from '@syncfusion/ej2-angular-lists';

@Component({
    selector: 'app-notification-6',
    standalone: true,
    imports: [CommonModule, ButtonModule, CheckBoxModule, DropDownButtonModule, SidebarModule, TabModule, ListViewModule],
    templateUrl: './notification-6.component.html',
    styleUrl: './notification-6.component.css'
})
export class Notification6Component {
    @ViewChild('tab') tab!: TabComponent;
    @ViewChild('listview') listview!: ListViewComponent;
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public overflowMode: string = 'None';
    public width: string = '540px';

    constructor() { }

    public ngOnInit(): void {
        /* SB Code - Start */
        window.addEventListener('message', this.handleMessageEvent);
        this.tab?.refresh();
        /* SB Code - End */
    }

    /* SB Code - Start */
    public ngAfterViewInit(): void {
        setTimeout(() => {
            this.tab.refresh();
        }, 250);
        this.tab.refreshActiveTabBorder();
        this.updateTabItems();
    }
    /* SB Code - End */

    public ngOnDestroy(): void {
        /* SB Code - Start */
        window.removeEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    public ticketData: any[] = [
        {
            id: 98724,
            title: 'Resolution SLA Escalation',
            content: 'Due on Dec 16, 2024 10:58 AM (IST) for "Hover and selection color are inconsistent across all themes- Gantt".',
            avatar: 'JS',
            tag: 'warning',
            date: new Date(2024, 11, 16, 10, 58),
            category: 'others'
        },
        {
            id: 98725,
            title: 'Reply Added',
            content: 'Tom Harris added a reply to "Can you suggest providing the icon shown when we drop as child in Tree Grid?".',
            avatar: 'MJ',
            tag: 'warning',
            date: new Date(2024, 11, 16, 10, 58),
            category: 'focused'
        },
        {
            id: 98726,
            title: 'Ticket Assigned to You',
            content: 'Oliva Adams assigned "Can you suggest providing the icon shown when we drop as child in Tree Grid?" to you.',
            avatar: 'DC',
            tag: 'danger',
            date: new Date(2024, 11, 16, 10, 58),
            category: 'others'
        },
        {
            id: 98727,
            title: 'Resolution SLA Escalation',
            content: 'Due on Dec 16, 2024 10:58 AM (IST) for "Hover and selection color are inconsistent across all themes- Gantt".',
            avatar: 'LR',
            tag: 'warning',
            date: new Date(2024, 11, 16, 10, 58),
            category: 'others'
        },
        {
            id: 98728,
            title: 'Public Note Added',
            content: 'System Automation added a public note to "Review the Tailwind theme for File Manager team components".',
            avatar: 'DC',
            tag: 'danger',
            date: new Date(2024, 11, 16, 10, 58),
            category: 'focused'
        }
    ];

    public onTabCreated(): void {
        this.updateListView(this.tab.selectedItem);
    }

    public onTabSelected(): void {
        this.updateListView(this.tab.selectedItem);
    }

    public updateListView(index: number): void {
        const headers = this.tab.element.querySelectorAll('.e-tab-header .e-tab-text');
        const selectedText = headers[index]?.textContent?.split(' ')[0].trim().toLowerCase() ?? 'all';
        const filteredData = selectedText === 'all' ? this.ticketData : this.ticketData.filter(e => e.category === selectedText);
        this.listview.dataSource = filteredData;
        this.listview.dataBind();
    }

    public updateTabItems(): void {
        if (window.innerWidth < 640) {
            this.overflowMode = 'Popup';
        } else {
            this.overflowMode = 'None';
        }
    }

    @HostListener('window:resize')
    public handleResize(): void {
        this.updateTabItems();
        this.width = window.innerWidth < 640 ? '100%' : "540px";
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'notification-6' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                    setTimeout(() => {
                        this.tab.refresh();
                    }, 250);
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
