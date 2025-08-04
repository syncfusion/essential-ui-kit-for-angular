import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-calendar-5',
    standalone: true,
    imports: [CommonModule, ButtonModule, CheckBoxModule, CalendarModule, SidebarModule, ListViewModule],
    templateUrl: './calendar-5.component.html',
    styleUrl: './calendar-5.component.css'
})
export class Calendar5Component implements OnInit, OnDestroy {
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public width: string = '310px';
    private breakpointSubscription!: Subscription;

    constructor(private breakpointObserver: BreakpointObserver) { }

    public ngOnInit(): void {
        this.breakpointSubscription = this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe(result => {
            this.width = result.matches ? '100%' : '310px';
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

    public data: Object[] = [
        {   
            header: 'Read a book about UI',
            date: '09:00 AM - 11:00 AM',
            completed: true
        },
        {
            header: 'Meeting with client',
            date: '12:00 AM - 12:30 PM',
            completed: true
        },
        {
            header: 'Hangout with friends',
            date: '01:00 PM - 02:00 PM',
            completed: true
        },
        {   
            header: 'Coffee break',
            date: '04:00 PM - 04:30 PM',
            completed: false
        },
        {
            header: 'Dinner with family',
            date: '08:00 PM - 09:00 PM',
            completed: false
        }
    ];

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'calendar-5' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}