import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { ButtonModule, ChipListModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-grid-4',
    standalone: true,
    imports: [CommonModule, GridModule, ButtonModule, ChipListModule],
    templateUrl: './grid-4.component.html'
})
export class Grid4Component implements OnInit, OnDestroy {
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

    public gridData: Object[] = [
        {
            id: 1,
            contactId: "C0001",
            profile: {
                name: "Jane Smith",
                initial: "",
                email: "jane.smith@example.com",
                colorTheme: "",
                avatar: 'avatar-8.jpg'
            },
            jobTitle: "Marketing Director",
            company: "Tech Solutions",
            communicationPreferences: ["Email", "Phone"],
            location: "Austin, TX",
            leadSource: "Referral",
            avatar: 'avatar-14.jpg',
            assignedTo: { name: "Sarah Lee", department: "Marketing" },
            status: "Active",
        },
        {
            id: 2,
            contactId: "C0002",
            profile: {
                name: "Mark Johnson",
                initial: "",
                email: "mark.johnson@example.com",
                colorTheme: "",
                avatar: 'avatar-1.jpg'
            },
            jobTitle: "Sales Manager",
            company: "Innovate Inc.",
            communicationPreferences: ["Phone"],
            location: "San Jose, CA",
            leadSource: "Direct",
            avatar: 'avatar-7.jpg',
            assignedTo: { name: "Tom Richards", department: "Sales" },
            status: "Inactive",
        },
        {
            id: 3,
            contactId: "C0003",
            profile: {
                name: "Emily White",
                initial: "",
                email: "emily.white@example.com",
                colorTheme: "",
                avatar: 'avatar-9.jpg'
            },
            jobTitle: "CEO",
            company: "Creative Co.",
            communicationPreferences: ["Email", "Phone"],
            location: "Boston, MA",
            leadSource: "Web Inquiry",
            avatar: 'avatar-13.jpg',
            assignedTo: { name: "Lisa Brown", department: "Executive" },
            status: "Active",
        },
        {
            id: 4,
            contactId: "C0004",
            profile: {
                name: "Tom Harris",
                initial: "TH",
                email: "tom.harris@example.com",
                colorTheme: "Red",
                avatar: ''
            },
            jobTitle: "Product Manager",
            company: "Media Group",
            communicationPreferences: ["Email"],
            location: "Miami, FL",
            leadSource: "Referral",
            avatar: 'avatar-7.jpg',
            assignedTo: { name: "Tom Richards", department: "Sales" },
            status: "Inactive",
        },
        {
            id: 5,
            contactId: "C0005",
            profile: {
                name: "Lisa Green",
                initial: "LG",
                email: "lisa.green@example.com",
                colorTheme: "Green",
                avatar: ''
            },
            jobTitle: "IT Specialist",
            company: "Global Tech",
            communicationPreferences: ["Email", "Phone"],
            location: "Portland, OR",
            leadSource: "Direct",
            avatar: 'avatar-13.jpg',
            assignedTo: { name: "Lisa Brown", department: "Executive" },
            status: "Inactive",
        },
        {
            id: 6,
            contactId: "C0006",
            profile: {
                name: "David Clark",
                initial: "",
                email: "david.clark@example.com",
                colorTheme: "",
                avatar: 'avatar-2.jpg'
            },
            jobTitle: "HR Manager",
            company: "PeopleWorks",
            communicationPreferences: ["Email"],
            location: "Dallas, TX",
            leadSource: "Referral",
            avatar: 'avatar-14.jpg',
            assignedTo: { name: "Sarah Lee", department: "Marketing" },
            status: "Active",
        },
        {
            id: 7,
            contactId: "C0007",
            profile: {
                name: "Rachel Lee",
                initial: "RL",
                email: "rachel.lee@example.com",
                colorTheme: "Blue",
                avatar: ''
            },
            jobTitle: "CFO",
            company: "Finance Corp",
            communicationPreferences: ["Email", "Phone"],
            location: "New York, NY",
            leadSource: "Web Inquiry",
            avatar: 'avatar-7.jpg',
            assignedTo: { name: "Tom Richards", department: "Sales" },
            status: "Inactive",
        },
        {
            id: 8,
            contactId: "C0008",
            profile: {
                name: "Olivia Adams",
                initial: "",
                email: "olivia.adams@example.com",
                colorTheme: "",
                avatar: 'avatar-12.jpg'
            },
            jobTitle: "Operations Manager",
            company: "Logistics Ltd",
            communicationPreferences: ["Phone"],
            location: "Seattle, WA",
            leadSource: "Referral",
            avatar: 'avatar-13.jpg',
            assignedTo: { name: "Lisa Brown", department: "Executive" },
            status: "Active",
        },
        {
            id: 9,
            contactId: "C0009",
            profile: {
                name: "Lucas Robinson",
                initial: "",
                email: "lucas.robinson@example.com",
                colorTheme: "",
                avatar: 'avatar-5.jpg'
            },
            jobTitle: "Customer Support Manager",
            company: "SupportWorks",
            communicationPreferences: ["Phone", "Email"],
            location: "Miami, FL",
            leadSource: "Web Inquiry",
            avatar: 'avatar-14.jpg',
            assignedTo: { name: "Sarah Lee", department: "Marketing" },
            status: "Inactive",
        },
        {
            id: 10,
            contactId: "C0010",
            profile: {
                name: "Sophia Martinez",
                initial: "",
                email: "sophia.martinez@example.com",
                colorTheme: "",
                avatar: 'avatar-10.jpg'
            },
            jobTitle: "Business Analyst",
            company: "Insight Analytics",
            communicationPreferences: ["Email", "Phone"],
            location: "Atlanta, GA",
            leadSource: "Direct",
            avatar: 'avatar-14.jpg',
            assignedTo: { name: "Sarah Lee", department: "Marketing" },
            status: "Active",
        }
    ];

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'grid-4' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
