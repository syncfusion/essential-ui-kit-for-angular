import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterService, GridModule, SortService } from '@syncfusion/ej2-angular-grids';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-grid-6',
    standalone: true,
    imports: [CommonModule, GridModule, ButtonModule],
    providers: [FilterService, SortService],
    templateUrl: './grid-6.component.html'
})
export class Grid6Component implements OnInit, OnDestroy {
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
            transactionId: "TRX202401",
            customerDetails: {
                name: "Jane Smith",
                email: "jane.smith@example.com",
                avatar: "avatar-8.jpg"
            },
            invoiceNumber: "INV202401",
            description: "Payment for invoice",
            amount: 1300,
            date: new Date("2024-05-17"),
            paymentMethod: "Credit Card",
            status: "Completed"
        },
        {
            id: 2,
            transactionId: "TRX202402",
            customerDetails: {
                name: "Mark Johnson",
                email: "mark.johnson@example.com",
                avatar: "avatar-1.jpg"
            },
            invoiceNumber: "INV202402",
            description: "Subscription renewal",
            amount: 450,
            date: new Date("2024-11-12"),
            paymentMethod: "PayPal",
            status: "Pending"
        },
        {
            id: 3,
            transactionId: "TRX202403",
            customerDetails: {
                name: "Emily White",
                email: "emily.white@example.com",
                avatar: "avatar-9.jpg"
            },
            invoiceNumber: "INV202403",
            description: "Consulting services",
            amount: 2800,
            date: new Date("2024-01-15"),
            paymentMethod: "Online Transfer",
            status: "Failed"
        },
        {
            id: 4,
            transactionId: "TRX202404",
            customerDetails: {
                name: "Tom Harris",
                email: "tom.harris@example.com",
                avatar: "avatar-4.jpg"
            },
            invoiceNumber: "INV202404",
            description: "Equipment purchase",
            amount: 2750,
            date: new Date("2024-07-18"),
            paymentMethod: "Online Transfer",
            status: "Completed"
        },
        {
            id: 5,
            transactionId: "TRX202405",
            customerDetails: {
                name: "Lisa Green",
                email: "lisa.green@example.com",
                avatar: "avatar-10.jpg"
            },
            invoiceNumber: "INV202405",
            description: "Event sponsorship",
            amount: 3870,
            date: new Date("2024-01-23"),
            paymentMethod: "PayPal",
            status: "Cleared"
        },
        {
            id: 6,
            transactionId: "TRX202406",
            customerDetails: {
                name: "David Clark",
                email: "david.clark@example.com",
                avatar: "avatar-5.jpg"
            },
            invoiceNumber: "INV202406",
            description: "Online course registration",
            amount: 580,
            date: new Date("2024-03-12"),
            paymentMethod: "Cheque",
            status: "Failed"
        },
        {
            id: 7,
            transactionId: "TRX202407",
            customerDetails: {
                name: "Rachel Lee",
                email: "rachel.lee@example.com",
                avatar: "avatar-6.jpg"
            },
            invoiceNumber: "INV202407",
            description: "Software license renewal",
            amount: 1250,
            date: new Date("2024-09-08"),
            paymentMethod: "Credit Card",
            status: "Completed"
        },
        {
            id: 8,
            transactionId: "TRX202408",
            customerDetails: {
                name: "Olivia Adams",
                email: "olivia.adams@example.com",
                avatar: "avatar-10.jpg"
            },
            invoiceNumber: "INV202408",
            description: "Consulting services",
            amount: 648,
            date: new Date("2024-10-12"),
            paymentMethod: "PayPal",
            status: "Failed"
        },
        {
            id: 9,
            transactionId: "TRX202409",
            customerDetails: {
                name: "Lucas Brown",
                email: "lucas.brown@example.com",
                avatar: "avatar-11.jpg"
            },
            invoiceNumber: "INV202409",
            description: "Membership fee",
            amount: 792,
            date: new Date("2024-06-11"),
            paymentMethod: "Cheque",
            status: "Pending"
        },
        {
            id: 10,
            transactionId: "TRX202410",
            customerDetails: {
                name: "Sophia Martinez",
                email: "sophia.martinez@example.com",
                avatar: "avatar-14.jpg"
            },
            invoiceNumber: "INV202410",
            description: "Training workshop fee",
            amount: 840,
            date: new Date("2024-02-17"),
            paymentMethod: "Cheque",
            status: "Completed"
        }
    ];

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'grid-6' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
