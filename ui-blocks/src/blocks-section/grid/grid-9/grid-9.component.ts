import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule, GroupService } from '@syncfusion/ej2-angular-grids';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-grid-9',
    standalone: true,
    imports: [CommonModule, GridModule, ButtonModule],
    providers: [GroupService],
    templateUrl: './grid-9.component.html'
})
export class Grid9Component implements OnInit, OnDestroy {
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public data: Object[] = [
        { id: 1, category: "User Management", permission: "Create Users", systemAdmin: true, itManager: true, hrManager: false, financeManager: false, salesManager: false, customerServiceRep: false, generalEmployee: false },
        { id: 2, category: "User Management", permission: "Edit Users", systemAdmin: true, itManager: true, hrManager: false, financeManager: false, salesManager: false, customerServiceRep: false, generalEmployee: false },
        { id: 3, category: "User Management", permission: "Delete Users", systemAdmin: true, itManager: false, hrManager: false, financeManager: false, salesManager: false, customerServiceRep: false, generalEmployee: false },
        { id: 4, category: "User Management", permission: "View Users", systemAdmin: true, itManager: true, hrManager: true, financeManager: true, salesManager: true, customerServiceRep: true, generalEmployee: true },
        { id: 5, category: "Financial Operations", permission: "Create Invoices", systemAdmin: true, itManager: false, hrManager: false, financeManager: true, salesManager: true, customerServiceRep: false, generalEmployee: false },
        { id: 6, category: "Financial Operations", permission: "Approve Expenses", systemAdmin: true, itManager: false, hrManager: false, financeManager: true, salesManager: false, customerServiceRep: false, generalEmployee: false },
        { id: 7, category: "Financial Operations", permission: "View Financial Reports", systemAdmin: true, itManager: false, hrManager: false, financeManager: true, salesManager: false, customerServiceRep: false, generalEmployee: false },
        { id: 8, category: "HR Functions", permission: "Manage Payroll", systemAdmin: true, itManager: false, hrManager: true, financeManager: true, salesManager: false, customerServiceRep: false, generalEmployee: false },
        { id: 9, category: "HR Functions", permission: "Handle Leave Requests", systemAdmin: true, itManager: false, hrManager: true, financeManager: false, salesManager: false, customerServiceRep: true, generalEmployee: false },
        { id: 10, category: "HR Functions", permission: "Conduct Performance Reviews", systemAdmin: true, itManager: false, hrManager: true, financeManager: false, salesManager: false, customerServiceRep: false, generalEmployee: false },
        { id: 11, category: "Sale Operations", permission: "Create Sales Orders", systemAdmin: true, itManager: false, hrManager: false, financeManager: false, salesManager: true, customerServiceRep: true, generalEmployee: false },
        { id: 12, category: "Sale Operations", permission: "Apply Discounts", systemAdmin: true, itManager: false, hrManager: false, financeManager: false, salesManager: true, customerServiceRep: false, generalEmployee: false },
        { id: 13, category: "Sale Operations", permission: "View Sales Reports", systemAdmin: true, itManager: false, hrManager: false, financeManager: true, salesManager: true, customerServiceRep: false, generalEmployee: false },
        { id: 14, category: "IT Operations", permission: "Manage System Configurations", systemAdmin: true, itManager: true, hrManager: false, financeManager: false, salesManager: false, customerServiceRep: false, generalEmployee: false },
        { id: 15, category: "IT Operations", permission: "Monitor System Performance", systemAdmin: true, itManager: true, hrManager: false, financeManager: false, salesManager: false, customerServiceRep: false, generalEmployee: false },
        { id: 16, category: "IT Operations", permission: "Manage Backups", systemAdmin: true, itManager: true, hrManager: false, financeManager: false, salesManager: false, customerServiceRep: false, generalEmployee: false },
        { id: 17, category: "General Access", permission: "Access Company Directory", systemAdmin: true, itManager: true, hrManager: true, financeManager: true, salesManager: true, customerServiceRep: true, generalEmployee: true },
        { id: 18, category: "General Access", permission: "Submit Expense Reports", systemAdmin: true, itManager: true, hrManager: true, financeManager: true, salesManager: true, customerServiceRep: true, generalEmployee: true },
        { id: 19, category: "General Access", permission: "View Personal Information", systemAdmin: true, itManager: true, hrManager: true, financeManager: true, salesManager: true, customerServiceRep: true, generalEmployee: true }
    ];

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

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'grid-9' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
