import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule, SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { FormsModule } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-filter-panel-3',
    standalone: true,
    imports: [CommonModule, SidebarModule, DatePickerModule, ButtonModule, DropDownListModule, FormsModule],
    templateUrl: './filter-panel-3.component.html'
})
export class FilterPanel3Component implements OnInit, OnDestroy {
    @ViewChild('sidebar') public sidebar!: SidebarComponent;

    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public width: string = '320px';
    public category: Object[] = ['Technical Support', 'Account Management', 'Billing', 'Feature Request', 'Bug Report', 'Security', 'Performance', 'Documentation'];
    public tags: Object[] = ['Frontend', 'Backend ', 'Database', 'Network', 'API', 'UI/UX', 'Mobile'];
    public priority: Object[] = ['Critical', 'High', 'Medium', 'Low'];
    public requester: Object[] = ['Jane Smith', 'Mark Johnson', 'Emily White', 'Tom Harris'];
    public status: Object[] = ['Open', 'In Progress', 'Pending', 'On Hold', 'Resolved', 'Closed'];
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
                if (blockData.name === 'filter-panel-3' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
