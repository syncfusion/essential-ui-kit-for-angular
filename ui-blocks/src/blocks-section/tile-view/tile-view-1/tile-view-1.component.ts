import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBarModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule, CheckBoxModule, SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';

@Component({
    selector: 'app-tile-view-1',
    standalone: true,
    imports: [CommonModule, AppBarModule, ButtonModule, CheckBoxModule, SwitchModule, DropDownButtonModule, ListViewModule],
    templateUrl: './tile-view-1.component.html',
    styleUrl: './tile-view-1.component.css'
})
export class TileView1Component implements OnInit, OnDestroy {
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */

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

    public ticketDetails: Object[] = [
        {
            ticketId: 98724,
            dueDate: new Date(2024, 7, 15),
            createdTime: 'Creates 3 hrs ago',
            title: 'Update payment gateway integration',
            category: 'Development',
            requester: 'Emma Thompson',
            assignee: 'Michael Chen',
            status: 'Open',
            priorityLevel: 'High',
            commentCount: 0
        },
        {
            ticketId: 98725,
            dueDate: new Date(2024, 8, 30),
            createdTime: 'Creates 5 hrs ago',
            title: 'Create onboarding email sequence',
            category: 'Marketing',
            requester: 'Sophie Martin',
            assignee: 'Alex Johnson',
            status: 'In-progress',
            priorityLevel: 'Medium',
            commentCount: 5
        },
        {
            ticketId: 98726,
            dueDate: new Date(2024, 7, 10),
            createdTime: 'Creates 1 day ago',
            title: 'Fix mobile responsiveness issues',
            category: 'UX/UI Design',
            requester: 'David Lee',
            assignee: 'Emily Wang',
            status: 'Open',
            priorityLevel: 'High',
            commentCount: 0
        },
        {
            ticketId: 98727,
            dueDate: new Date(2024, 7, 5),
            createdTime: 'Creates 2 day ago',
            title: 'Implement two-factor authentication',
            category: 'Security',
            requester: 'Robert Brown',
            assignee: 'Sarah Davis',
            status: 'Closed',
            priorityLevel: 'Low',
            commentCount: 7
        }
    ];

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'tile-view-1' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
