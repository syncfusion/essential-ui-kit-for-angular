import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBarModule, BreadcrumbModule } from '@syncfusion/ej2-angular-navigations';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { ButtonModule, SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';

@Component({
    selector: 'app-tile-view-3',
    standalone: true,
    imports: [CommonModule, AppBarModule, BreadcrumbModule, DropDownButtonModule, ButtonModule, SwitchModule, ListViewModule],
    templateUrl: './tile-view-3.component.html',
    styleUrl: './tile-view-3.component.css'
})
export class TileView3Component implements OnInit, OnDestroy {
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

    public transactionDetails: Object[] = [
        {
            transactionId: 'TXN000245',
            title: 'Payment for project management services',
            company: 'Cisco Solutions Pvt. Ltd',
            amount: 25000,
            currency: 'USD',
            paymentType: 'Wire Transfer',
            category: 'Consulting',
            status: 'Completed'
        },
        {
            transactionId: 'TXN000246',
            title: 'Advance payment for Q3 contract',
            company: 'Client John Chris',
            amount: 100000,
            currency: 'USD',
            paymentType: 'Deposit',
            category: 'Income',
            status: 'Completed'
        },
        {
            transactionId: 'TXN000247',
            title: 'Purchase of new office equipment',
            company: 'Office Supplies Inc',
            amount: 7500,
            currency: 'USD',
            paymentType: 'Credit Card',
            category: 'Supplies',
            status: 'Completed'
        },
        {
            transactionId: 'TXN000248',
            title: 'Payment for invoice #9876',
            company: 'Delta Supplier',
            amount: 15000,
            currency: 'USD',
            paymentType: 'ACH Transfer',
            category: 'Supplies',
            status: 'Pending'
        }
    ];

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'tile-view-3' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
