import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-grid-2',
    standalone: true,
    imports: [CommonModule, GridModule, ButtonModule],
    templateUrl: './grid-2.component.html'
})
export class Grid2Component implements OnInit, OnDestroy {
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

    public data: Object[] = [
        {
            id: 1,
            ticketId: "HD-0001",
            issue: "Laptop not powering on",
            category: "Hardware",
            estimated: "1 hour",
            responseDue: new Date("05/1/2024"),
            priority: "High",
            assignee: {
                name: "Jane Smith",
                initial: "",
                email: "jane.smith@example.com",
                colorTheme: "",
                avatar: "avatar-8.jpg"
            },
            createdBy: {
                name: "Sarah Lee",
                initial: "SL",
                colorTheme: "Blue",
                avatar: ""
            },
            status: "Not Started"
        },
        {
            id: 2,
            ticketId: "HD-0002",
            issue: "Email application not syncing",
            category: "Software",
            estimated: "2 days",
            responseDue: new Date("10/1/2024"),
            priority: "Medium",
            assignee: {
                name: "Mark Johnson",
                initial: "",
                email: "mark.johnson@example.com",
                colorTheme: "",
                avatar: "avatar-1.jpg"
            },
            createdBy: {
                name: "Tom Richards",
                initial: "",
                colorTheme: "",
                avatar: "avatar-2.jpg"
            },
            status: "In Progress"
        },
        {
            id: 3,
            ticketId: "HD-0003",
            issue: "Unable to connect to VPN",
            category: "Network",
            estimated: "4 hours",
            responseDue: new Date("01/15/2024"),
            priority: "High",
            assignee: {
                name: "Emily White",
                initial: "EW",
                email: "emily.white@example.com",
                colorTheme: "Red",
                avatar: ""
            },
            createdBy: {
                name: "Lisa Brown",
                initial: "",
                colorTheme: "",
                avatar: "avatar-10.jpg",
            },
            status: "Not Started"
        },
        {
            id: 4,
            ticketId: "HD-0004",
            issue: "Printer not responding",
            category: "Hardware",
            estimated: "7 hours",
            responseDue: new Date("01/20/2024"),
            priority: "Low",
            assignee: {
                name: "Tom Hicks",
                initial: "",
                email: "tom.hicks@example.com",
                colorTheme: "",
                avatar: "avatar-3.jpg"
            },
            createdBy: {
                name: "Jane Smith",
                initial: "JS",
                colorTheme: "Green",
                avatar: ""
            },
            status: "Resolved"
        },
        {
            id: 5,
            ticketId: "HD-0005",
            issue: "Application crashing",
            category: "Software",
            estimated: "1 day",
            responseDue: new Date("01/25/2024"),
            priority: "High",
            assignee: {
                name: "David Clark",
                initial: "",
                email: "david.clark@example.com",
                colorTheme: "",
                avatar: "avatar-4.jpg"
            },
            createdBy: {
                name: "Robert Johnson",
                initial: "",
                colorTheme: "",
                avatar: "avatar-5.jpg",
            },
            status: "Not Started"
        },
        {
            id: 6,
            ticketId: "HD-0006",
            issue: "Slow internet connection",
            category: "Network",
            estimated: "2 hours",
            responseDue: new Date("1/2/2024"),
            priority: "Medium",
            assignee: {
                name: "Rachel Lee",
                initial: "RL",
                email: "rachel.lee@example.com",
                colorTheme: "Orange",
                avatar: "",
            },
            createdBy: {
                name: "Linda Morgan",
                initial: "",
                colorTheme: "",
                avatar: "avatar-11.jpg",
            },
            status: "In Progress"
        },
        {
            id: 7,
            ticketId: "HD-0007",
            issue: "Monitor screen flickering",
            category: "Hardware",
            estimated: "1 hours",
            responseDue: new Date("5/2/2024"),
            priority: "Low",
            assignee: {
                name: "Fred Butler",
                initial: "",
                email: "fred.butler@example.com",
                colorTheme: "",
                avatar: "avatar-1.jpg"
            },
            createdBy: {
                name: "Chris Johnson",
                initial: "",
                colorTheme: "",
                avatar: "avatar-2.jpg"
            },
            status: "Resolved"
        },
        {
            id: 8,
            ticketId: "HD-0008",
            issue: "Cannot install software",
            category: "Software",
            estimated: "2 days",
            responseDue: new Date("10/2/2024"),
            priority: "High",
            assignee: {
                name: "Olivia Adams",
                initial: "",
                email: "olivia.adams@example.com",
                colorTheme: "",
                avatar: "avatar-8.jpg"
            },
            createdBy: {
                name: "Chloe Anderson",
                initial: "CA",
                colorTheme: "Red",
                avatar: "",
            },
            status: "Not Started"
        },
        {
            id: 9,
            ticketId: "HD-0009",
            issue: "Cannot access website",
            category: "Network",
            estimated: "1 day",
            responseDue: new Date("02/15/2024"),
            priority: "High",
            assignee: {
                name: "Lucas Richards",
                initial: "",
                email: "lucas.richards@example.com",
                colorTheme: "",
                avatar: "avatar-10.jpg"
            },
            createdBy: {
                name: "Chris Johnson",
                initial: "",
                colorTheme: "",
                avatar: "avatar-4.jpg",
            },
            status: "Resolved"
        },
        {
            id: 10,
            ticketId: "HD-0010",
            issue: "Keyboard not working",
            category: "Hardware",
            estimated: "30 minutes",
            responseDue: new Date("02/20/2024"),
            priority: "Medium",
            assignee: {
                name: "Sophia Martinez",
                initial: "SM",
                email: "sophia.martinez@example.com",
                colorTheme: "Blue",
                avatar: ""
            },
            createdBy: {
                name: "Sarah Lee",
                initial: "",
                colorTheme: "",
                avatar: "avatar-13.jpg"
            },
            status: "In Progress"
        }
    ];

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'grid-2' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
