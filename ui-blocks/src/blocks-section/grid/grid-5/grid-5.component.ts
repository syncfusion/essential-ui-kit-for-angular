import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-grid-5',
    standalone: true,
    imports: [CommonModule, GridModule, ButtonModule],
    templateUrl: './grid-5.component.html'
})
export class Grid5Component implements OnInit, OnDestroy {
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
            assetId: "AS001",
            hardware: "Lenovo Yoga",
            category: "Laptop",
            serialNum: "CB27932009",
            invoice: "INV-2878",
            assigned: "John Doe",
            purchaseDate: new Date("4/10/2018"),
            warrantyEndDate: new Date("5/1/2021"),
            status: "Assigned",
        },
        {
            id: 2,
            assetId: "AS002",
            hardware: "Acer Aspire",
            category: "Miscellaneous",
            serialNum: "CB27932032",
            invoice: "INV-5436",
            purchaseDate: new Date("2/12/2018"),
            warrantyEndDate: new Date("3/1/2023"),
            status: "In-repair",
        },
        {
            id: 3,
            assetId: "AS003",
            hardware: "Apple MacBook",
            category: "Laptop",
            serialNum: "CB27932054",
            invoice: "INV-2345",
            purchaseDate: new Date("4/10/2018"),
            warrantyEndDate: new Date("4/3/2021"),
            status: "In-repair",
        },
        {
            id: 4,
            assetId: "AS004",
            hardware: "Lenovo Thinkpad",
            category: "Laptop",
            serialNum: "CB27932044",
            invoice: "INV-8753",
            purchaseDate: new Date("3/9/2018"),
            warrantyEndDate: new Date("5/12/2021"),
            status: "Pending",
        },
        {
            id: 5,
            assetId: "AS005",
            hardware: "Dell Inspiron",
            category: "Laptop",
            serialNum: "CB27932065",
            invoice: "INV-3735",
            assigned: "David Anto",
            purchaseDate: new Date("1/10/2018"),
            warrantyEndDate: new Date("4/1/2021"),
            status: "Assigned",
        },
        {
            id: 6,
            assetId: "AS006",
            hardware: "HP Pavilion",
            category: "Laptop",
            serialNum: "CB27932345",
            invoice: "INV-6643",
            assigned: "Mary Saveloy",
            purchaseDate: new Date("4/10/2018"),
            warrantyEndDate: new Date("9/1/2021"),
            status: "Assigned",
        },
        {
            id: 7,
            assetId: "AS007",
            hardware: "Asus ZenBook",
            category: "Laptop",
            serialNum: "CB27932088",
            invoice: "INV-8426",
            purchaseDate: new Date("6/16/2018"),
            warrantyEndDate: new Date("5/21/2021"),
            status: "Pending",
        },
        {
            id: 8,
            assetId: "AS008",
            hardware: "HP EliteBook",
            category: "Laptop",
            serialNum: "CB27932011",
            invoice: "INV-2351",
            purchaseDate: new Date("2/12/2018"),
            warrantyEndDate: new Date("10/2/2022"),
            status: "Ordered",
        },
        {
            id: 9,
            assetId: "AS009",
            hardware: "Apple MacBook Air",
            category: "Laptop",
            serialNum: "CB27932005",
            invoice: "INV-5553",
            purchaseDate: new Date("3/12/2018"),
            warrantyEndDate: new Date("3/1/2023"),
            status: "Pending",
        },
        {
            id: 10,
            assetId: "AS010",
            hardware: "Apple iPad Air",
            category: "Tablet",
            serialNum: "CB27932007",
            invoice: "INV-1212",
            purchaseDate: new Date("4/10/2018"),
            warrantyEndDate: new Date("6/1/2021"),
            status: "Pending",
        }
    ];

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'grid-5' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
