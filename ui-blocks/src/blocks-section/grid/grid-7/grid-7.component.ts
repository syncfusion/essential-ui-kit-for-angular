import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule, PageService } from '@syncfusion/ej2-angular-grids';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-grid-7',
    standalone: true,
    imports: [CommonModule, GridModule, ButtonModule],
    providers: [PageService],
    templateUrl: './grid-7.component.html'
})
export class Grid7Component implements OnInit, OnDestroy {
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
                initial: "JS",
                email: "jane.smith@example.com",
                colorTheme: 'Orange'
            },
            date: new Date("2024-05-01"),
            product: {
                name: "iPhone 15 Pro",
                image: "iphone-15-pro.png"
            },
            quantity: 1,
            amount: 999.99,
            paymentMethod: "Credit Card",
            salesRep: {
                name: "Cody Fisher",
                avatar: "avatar-1.jpg"
            },
            status: "Completed"
        },
        {
            id: 2,
            transactionId: "TRX202402",
            customerDetails: {
                name: "Mark Johnson",
                initial: "MJ",
                email: "mark.johnson@example.com",
                colorTheme: 'Blue'
            },
            date: new Date("2024-10-01"),
            product: {
                name: "MacBook Air M2",
                image: "macbook-air-m2.png"
            },
            quantity: 4,
            amount: 1299.00,
            paymentMethod: "PayPal",
            salesRep: {
                name: "Kathryn Murphy",
                avatar: "avatar-14.jpg"
            },
            status: "Pending"
        },
        {
            id: 3,
            transactionId: "TRX202403",
            customerDetails: {
                name: "Emily White",
                initial: "EW",
                email: "emily.white@example.com",
                colorTheme: 'Red'
            },
            date: new Date("2024-01-15"),
            product: {
                name: "AirPods Pro",
                image: "airpods-pro.png"
            },
            quantity: 3,
            amount: 449.98,
            paymentMethod: "Online Transfer",
            salesRep: {
                name: "Cameron Williamson",
                avatar: "avatar-4.jpg"
            },
            status: "Failed"
        },
        {
            id: 4,
            transactionId: "TRX202404",
            customerDetails: {
                name: "Tom Harris",
                initial: "TB",
                email: "tom.harris@example.com",
                colorTheme: 'Blue'
            },
            date: new Date("2024-01-20"),
            product: {
                name: "iPad Air",
                image: "ipad Air.png"
            },
            quantity: 2,
            amount: 599.00,
            paymentMethod: "Online Transfer",
            salesRep: {
                name: "Jenny Wilson",
                avatar: "avatar-13.jpg"
            },
            status: "Processing"
        },
        {
            id: 5,
            transactionId: "TRX202405",
            customerDetails: {
                name: "Lisa Green",
                initial: "LG",
                email: "lisa.green@example.com",
                colorTheme: 'Purple'
            },
            date: new Date("2024-01-25"),
            product: {
                name: "Apple Watch Series 8",
                image: "apple-watch-series-8.png"
            },
            quantity: 1,
            amount: 399.00,
            paymentMethod: "PayPal",
            salesRep: {
                name: "Marvin McKinney",
                avatar: "avatar-2.jpg"
            },
            status: "Completed"
        },
        {
            id: 6,
            transactionId: "TRX202406",
            customerDetails: {
                name: "Olivia Adams",
                initial: "OA",
                email: "olivia.adams@example.com",
                colorTheme: 'Green'
            },
            date: new Date("2024-01-02"),
            product: {
                name: "iPhone 14 Pro Max",
                image: "iphone-14-pro-max.png"
            },
            quantity: 2,
            amount: 699.00,
            paymentMethod: "Cheque",
            salesRep: {
                name: "Theresa Webb",
                avatar: "avatar-11.jpg"
            },
            status: "Pending"
        },
        {
            id: 7,
            transactionId: "TRX202407",
            customerDetails: {
                name: "David Clark",
                initial: "DC",
                email: "david.clark@example.com",
                colorTheme: 'Orange'
            },
            date: new Date("2024-05-02"),
            product: {
                name: "iPad Air",
                image: "ipad Air.png"
            },
            quantity: 3,
            amount: 599.00,
            paymentMethod: "Online Transfer",
            salesRep: {
                name: "Theresa Webb",
                avatar: "avatar-11.jpg"
            },
            status: "Failed"
        },
        {
            id: 8,
            transactionId: "TRX202408",
            customerDetails: {
                name: "Rachel Lee",
                initial: "RL",
                email: "rachel.lee@example.com",
                colorTheme: 'Purple'
            },
            date: new Date("2024-10-02"),
            product: {
                name: "AirPods Pro",
                image: "airpods-pro.png"
            },
            quantity: 2,
            amount: 449.98,
            paymentMethod: "PayPal",
            salesRep: {
                name: "Dianne Russell",
                avatar: "avatar-6.jpg"
            },
            status: "Pending"
        },
        {
            id: 9,
            transactionId: "TRX202409",
            customerDetails: {
                name: "Lucas Robinson",
                initial: "LR",
                email: "lucas.robinson@example.com",
                colorTheme: 'Green'
            },
            date: new Date("2024-05-01"),
            product: {
                name: "iPhone 15 Plus",
                image: "iphone-15-plus.png"
            },
            quantity: 1,
            amount: 799.99,
            paymentMethod: "PayPal",
            salesRep: {
                name: "Eleanor Pena",
                avatar: "avatar-9.jpg"
            },
            status: "Completed"
        },
        {
            id: 10,
            transactionId: "TRX202410",
            customerDetails: {
                name: "Sophia Martinez",
                initial: "SM",
                email: "sophia.martinez@example.com",
                colorTheme: 'Red'
            },
            date: new Date("2024-05-01"),
            product: {
                name: "MacBook Air M2",
                image: "macbook-air-m2.png"
            },
            quantity: 1,
            amount: 1299.00,
            paymentMethod: "Cheque",
            salesRep: {
                name: "Courtney Henry",
                avatar: "avatar-3.jpg"
            },
            status: "Failed"
        }
    ];

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'grid-7' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
