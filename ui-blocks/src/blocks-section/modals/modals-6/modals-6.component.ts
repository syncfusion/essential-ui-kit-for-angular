import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule, DialogComponent } from '@syncfusion/ej2-angular-popups';
import { FilterService, GridModule, SortService } from '@syncfusion/ej2-angular-grids';
import { ButtonModule, CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
  selector: 'app-modals-6',
  standalone: true,
  imports: [CommonModule, DialogModule, GridModule, ButtonModule, CheckBoxModule, DropDownButtonModule],
  providers: [FilterService, SortService],
  templateUrl: './modals-6.component.html',
  styleUrl: './modals-6.component.css'
})
export class Modals6Component implements OnInit, OnDestroy {
    @ViewChild('dialog') public dialog!: DialogComponent;
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public containerHeight: string = 'min-height: 764px;';
    public isMobile: boolean = false;
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
            description: "Payment for invoice"
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
            description: "Subscription renewal"
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
            description: "Consulting services"
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
            description: "Equipment purchase"
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
            description: "Event sponsorship"
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
            description: "Online course registration"
        }
    ];

    constructor() { }

    public ngOnInit(): void {
        /* SB Code - Start */
        window.addEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    public ngAfterViewInit(): void {
        setTimeout(() => {
            this.checkWindowSize();
        }, 200);
    }

    public ngOnDestroy(): void {
        /* SB Code - Start */
        window.removeEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    @HostListener('window:resize', ['$event'])
    public onResize(): void {
        this.checkWindowSize();
    }

    public checkWindowSize(): void {
        this.isMobile = window.innerWidth <= 640;
        this.containerHeight = this.isMobile ? 'min-height: 630px;' : 'min-height: 764px;';
        this.dialog.show(this.isMobile);
    }

    /* SB Code - Start */
    private refreshDialog(timeout: number): void {
        setTimeout(() => {
            this.dialog.show(this.isMobile);
        }, timeout);
    }

    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'modals-6' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                    this.refreshDialog(400);
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
