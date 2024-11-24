import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-grid-1',
    standalone: true,
    imports: [CommonModule, GridModule, ButtonModule],
    templateUrl: './grid-1.component.html'
})

export class Grid1Component implements OnInit, OnDestroy {
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
            leadId: "L1001",
            details: {
                name: "John Doe",
                initial: "JD",
                email: "john.doe@example.com",
                colorTheme: 'Red'
            },
            status: "Qualified",
            interest: "High",
            date: new Date("09/15/2024"),
            assignee: {
                name: "Alice Smith",
                avatar: "avatar-8.jpg"
            },
            source: "Web Inquiry",
            revenue: 90000
        },
        {
            id: 2,
            leadId: "L1002",
            details: {
                name: "Emily White",
                initial: "EW",
                email: "emily.white@example.com",
                colorTheme: 'Blue'
            },
            status: "New",
            interest: "Medium",
            date: new Date("10/08/2024"),
            assignee: {
                name: "Bob Johnson",
                avatar: "avatar-1.jpg"
            },
            source: "Referral",
            revenue: 80000
        },
        {
            id: 3,
            leadId: "L1003",
            details: {
                name: "Michael Green",
                initial: "MG",
                email: "michael.green@example.com",
                colorTheme: 'Green'
            },
            status: "Contacted",
            interest: "High",
            date: new Date("12/09/2024"),
            assignee: {
                name: "Carol Brown",
                avatar: "avatar-4.jpg"
            },
            source: "Trade Show",
            revenue: 85000
        },
        {
            id: 4,
            leadId: "L1004",
            details: {
                name: "Sarah Brown",
                initial: "SB",
                email: "sarah.brown@example.com",
                colorTheme: 'Orange'
            },
            status: "Lead",
            interest: "Low",
            date: new Date("09/14/2024"),
            assignee: {
                name: "Dave Wilson",
                avatar: "avatar-3.jpg"
            },
            source: "Email Campaign",
            revenue: 60000
        },
        {
            id: 5,
            leadId: "L1005",
            details: {
                name: "David Miller",
                initial: "DM",
                email: "david.miller@example.com",
                colorTheme: 'Blue'
            },
            status: "Qualified",
            interest: "High",
            date: new Date("09/20/2024"),
            assignee: {
                name: "Emma Davis",
                avatar: "avatar-11.jpg"
            },
            source: "Direct Mail",
            revenue: 95000
        },
        {
            id: 6,
            leadId: "L1006",
            details: {
                name: "Laura Martinez",
                initial: "LM",
                email: "laura.martinez@example.com",
                colorTheme: 'Purple'
            },
            status: "New",
            interest: "Medium",
            date: new Date("09/16/2024"),
            assignee: {
                name: "Frank Moore",
                avatar: "avatar-2.jpg"
            },
            source: "Web Inquiry",
            revenue: 75000
        },
        {
            id: 7,
            leadId: "L1007",
            details: {
                name: "Chris Lee",
                initial: "CL",
                email: "chris.lee@example.com",
                colorTheme: 'Green'
            },
            status: "Contacted",
            interest: "Medium",
            date: new Date("09/17/2024"),
            assignee: {
                name: "Grace Hui",
                avatar: "avatar-12.jpg"
            },
            source: "Referral",
            revenue: 85000
        },
        {
            id: 8,
            leadId: "L1008",
            details: {
                name: "Megan Johnson",
                initial: "MJ",
                email: "megan.johnson@example.com",
                colorTheme: 'Orange'
            },
            status: "Lead",
            interest: "High",
            date: new Date("09/18/2024"),
            assignee: {
                name: "Henry King",
                avatar: "avatar-5.jpg"
            },
            source: "Trade Show",
            revenue: 95000
        },
        {
            id: 9,
            leadId: "L1009",
            details: {
                name: "Robert Smith",
                initial: "RS",
                email: "robert.smith@example.com",
                colorTheme: 'Blue'
            },
            status: "New",
            interest: "Medium",
            date: new Date("09/19/2024"),
            assignee: {
                name: "Ivy Walker",
                avatar: "avatar-14.jpg"
            },
            source: "Email Campaign",
            revenue: 70000
        },
        {
            id: 10,
            leadId: "L1010",
            details: {
                name: "Olivia Davis",
                initial: "OD",
                email: "olivia.davis@example.com",
                colorTheme: 'Red'
            },
            status: "Contacted",
            interest: "Low",
            date: new Date("09/20/2024"),
            assignee: {
                name: "Jack Lee",
                avatar: "avatar-6.jpg"
            },
            source: "Direct Mail",
            revenue: 90000
        }
    ];

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'grid-1' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
