import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-grid-3',
    standalone: true,
    imports: [CommonModule, GridModule, ButtonModule],
    templateUrl: './grid-3.component.html'
})
export class Grid3Component implements OnInit, OnDestroy {
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
            invoiceId: "INV202401",
            customerDetails: {
                name: "Alice Johnson",
                email: "alice.johnson@example.com",
                avatar: "avatar-8.jpg",
            },
            invoiceDate: new Date("02/01/2024"),
            itemsPurchased: "Helpdesk - Team",
            quantity: 1,
            price: 1000,
            tax: 72,
            discount: 0,
            total: 1072,
            status: "Paid",
            dueDate: new Date("05/01/2024"),
            paymentDate: new Date("05/01/2024"),
            paymentMethod: "Credit card"
        },
        {
            id: 2,
            invoiceId: "INV202402",
            customerDetails: {
                name: "Bob Smith",
                email: "bob.smith@example.com",
                avatar: "avatar-1.jpg"
            },
            invoiceDate: new Date("10/28/2024"),
            itemsPurchased: "AI Content Creator",
            quantity: 2,
            price: 2000,
            tax: 160,
            discount: 10,
            total: 2150,
            status: "Pending",
            dueDate: new Date("05/01/2024"),
            paymentDate: null,
            paymentMethod: null
        },
        {
            id: 3,
            invoiceId: "INV202403",
            customerDetails: {
                name: "Carol Davis",
                email: "carol.davis@example.com",
                avatar: "avatar-2.jpg"
            },
            invoiceDate: new Date("01/15/2024"),
            itemsPurchased: "Helpdesk - Single User",
            quantity: 2,
            price: 1450,
            tax: 110,
            discount: 20,
            total: 1600,
            status: "Paid",
            dueDate: new Date("04/15/2024"),
            paymentDate: new Date("04/15/2024"),
            paymentMethod: "Paypal"
        },
        {
            id: 4,
            invoiceId: "INV202404",
            customerDetails: {
                name: "Dave White",
                email: "dave.white@example.com",
                avatar: "avatar-4.jpg"
            },
            invoiceDate: new Date("03/12/2024"),
            itemsPurchased: "Miro App",
            quantity: 1,
            price: 4600,
            tax: 320,
            discount: 0,
            total: 4920,
            status: "Pending",
            dueDate: new Date("05/03/2024"),
            paymentDate: null,
            paymentMethod: null
        },
        {
            id: 5,
            invoiceId: "INV202405",
            customerDetails: {
                name: "Eve Wilson",
                email: "eve.wilson@example.com",
                avatar: "avatar-9.jpg"
            },
            invoiceDate: new Date("01/25/2024"),
            itemsPurchased: "Canva",
            quantity: 1,
            price: 820,
            tax: 30,
            discount: 0,
            total: 850,
            status: "Paid",
            dueDate: new Date("01/30/2024"),
            paymentDate: new Date("01/30/2024"),
            paymentMethod: "Cash"
        },
        {
            id: 6,
            invoiceId: "INV202406",
            customerDetails: {
                name: "Frank Harris",
                email: "frank.harris@example.com",
                avatar: "avatar-6.jpg"
            },
            invoiceDate: new Date("05/08/2024"),
            itemsPurchased: "Remove BG App",
            quantity: 3,
            price: 220,
            tax: 25,
            discount: 0,
            total: 245,
            status: "Pending",
            dueDate: new Date("06/08/2024"),
            paymentDate: null,
            paymentMethod: null
        },
        {
            id: 7,
            invoiceId: "INV202407",
            customerDetails: {
                name: "Grace Brown",
                email: "grace.brown@example.com",
                avatar: "avatar-10.jpg"
            },
            invoiceDate: new Date("01/08/2024"),
            itemsPurchased: "Affinity Designer",
            quantity: 2,
            price: 235,
            tax: 25,
            discount: 0,
            total: 260,
            status: "Pending",
            dueDate: new Date("05/01/2024"),
            paymentDate: null,
            paymentMethod: null
        },
        {
            id: 8,
            invoiceId: "INV202408",
            customerDetails: {
                name: "Henry King",
                email: "henry.king@example.com",
                avatar: "avatar-3.jpg"
            },
            invoiceDate: new Date("04/15/2024"),
            itemsPurchased: "Corel Draw",
            quantity: 2,
            price: 2500,
            tax: 200,
            discount: 0,
            total: 2700,
            status: "Pending",
            dueDate: new Date("06/15/2024"),
            paymentDate: null,
            paymentMethod: null
        },
        {
            id: 9,
            invoiceId: "INV202409",
            customerDetails: {
                name: "Ivy Anderson",
                email: "ivy.anderson@example.com",
                avatar: "avatar-14.jpg"
            },
            invoiceDate: new Date("07/21/2024"),
            itemsPurchased: "Affinity Designer",
            quantity: 1,
            price: 3200,
            tax: 210,
            discount: 30,
            total: 3380,
            status: "Paid",
            dueDate: new Date("09/21/2024"),
            paymentDate: new Date("09/20/2024"),
            paymentMethod: "Credit card"
        },
        {
            id: 10,
            invoiceId: "INV202410",
            customerDetails: {
                name: "Jack Scott",
                email: "jack.scott@example.com",
                avatar: "avatar-6.jpg"
            },
            invoiceDate: new Date("02/25/2024"),
            itemsPurchased: "Microsoft 365",
            quantity: 1,
            price: 1000,
            tax: 72,
            discount: 0,
            total: 1072,
            status: "Paid",
            dueDate: new Date("03/20/2024"),
            paymentDate: new Date("03/20/2024"),
            paymentMethod: "Cash"
        }
    ];

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'grid-3' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
