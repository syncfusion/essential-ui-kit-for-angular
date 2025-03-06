import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule, AccordionModule, TabModule, SidebarComponent, AccordionComponent, TabComponent } from '@syncfusion/ej2-angular-navigations';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filter-panel-4',
  standalone: true,
  imports: [CommonModule, SidebarModule, AccordionModule, TabModule, DatePickerModule, ButtonModule, DropDownListModule],
  templateUrl: './filter-panel-4.component.html',
  styleUrl: './filter-panel-4.component.css'
})
export class FilterPanel4Component implements OnInit, OnDestroy {
    @ViewChild('sidebar') public sidebar?: SidebarComponent;
    /* SB Code - Start */
    @ViewChild('requesterAccordion') public requesterAccordion!: AccordionComponent;
    @ViewChild('ticketAccordion') public ticketAccordion!: AccordionComponent;
    @ViewChild('tab') public tab!: TabComponent;
    
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public width: string = '320px';
    public assignee: Object[] = ['Jane Smith - Support Engineer', 'Mark	Johnson - Technical Lead ', 'Emily White - Support Specialist', 'Tom Harris - Product Expert'];
    public tags: Object[] = ['Technical Issue (Type)', 'Bug (Type)', 'Feature Request (Type)', 'High Priority (Priority)','Customer Impact (Impact)','Backend (Area)','Frontend (Area)'];
    public status: Object[] = ['Open', 'In Progress', 'Closed'];
    private breakpointSubscription!: Subscription;

    constructor(private breakpointObserver: BreakpointObserver) { }

    public ngOnInit(): void {
        this.breakpointSubscription = this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe(result => {
            this.width = result.matches ? '100%' : '320px';
        });
        /* SB Code - Start */
        window.addEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    /* SB Code - Start */
    public ngAfterViewInit(): void {
        setTimeout(() => {
            this.requesterAccordion.refresh();
            this.ticketAccordion.refresh();
            this.tab.refresh();
        }, 5000);
    }
    /* SB Code - End */

    public ngOnDestroy(): void {
        if (this.breakpointSubscription) {
            this.breakpointSubscription.unsubscribe();
        }
        /* SB Code - Start */
        window.removeEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'filter-panel-4' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
