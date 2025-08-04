import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, ChipListModule } from '@syncfusion/ej2-angular-buttons';
import { TimelineModule } from '@syncfusion/ej2-angular-layouts';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { DropDownButtonAllModule, DropDownButton } from '@syncfusion/ej2-angular-splitbuttons';
import { DatePickerModule, CalendarView } from '@syncfusion/ej2-angular-calendars';
import { MenuEventArgs } from '@syncfusion/ej2-angular-splitbuttons';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-calendar-6',
    standalone: true,
    imports: [CommonModule, ButtonModule, ChipListModule, TimelineModule, SidebarModule, DropDownButtonAllModule, DatePickerModule],
    templateUrl: './calendar-6.component.html',
    styleUrl: './calendar-6.component.css'
})
export class Calendar6Component implements OnInit, OnDestroy {
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public width: string = '310px';
    public selectedItem: string = 'Holiday';
    public start: CalendarView = 'Decade';
    public depth: CalendarView = 'Decade';
    public uniqueMonths: string[] = [];
    public uniqueMonthsDescription: string[] = [];
    public templateContents: { title: string; description: string }[] = [
        { title: 'Labor Day', description: 'Mon, Sep 2' },
        { title: 'Patriot Day', description: 'Wed, Sep 11' },
        { title: 'Eid e Milad', description: 'Wed, Sep 16' },
        { title: 'Columbus Day', description: 'Mon, Oct 14' },
        { title: 'Halloween', description: 'Thu, Oct 31' },
        { title: 'Veterans Day', description: 'Mon, Nov 11' },
        { title: 'Thanksgiving Day', description: 'Thu, Nov 28' },
        { title: 'Black Friday', description: 'Fri, Nov 29' }
    ];
    private breakpointSubscription!: Subscription;

    constructor(private breakpointObserver: BreakpointObserver) {
        this.getUniqueMonths();
    }

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

    public leaveOptions(leaveSelection: DropDownButton, args: MenuEventArgs): void {
        this.selectedItem = args.item.text || 'Holiday';
        leaveSelection.items.forEach(item => {
            item.iconCss = item.text === args.item?.text ? "e-icons e-check" : "";
        });
    }

    public getUniqueMonths(): void {
        this.templateContents.forEach(item => {
            const month = item.description.split(', ')[1].split(' ')[0];
            if (this.uniqueMonths.indexOf(month) === -1) {
                this.uniqueMonths.push(month);
                this.uniqueMonthsDescription.push(item.description);
            }
        });
    }

    public getMonthAbbreviation(date: string): string {
        return date.split(', ')[1].split(' ')[0];
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'calendar-6' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}