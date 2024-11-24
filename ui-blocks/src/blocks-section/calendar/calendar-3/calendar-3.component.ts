import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-calendar-3',
    standalone: true,
    imports: [CommonModule, DatePickerModule, SidebarModule, ButtonModule],
    templateUrl: './calendar-3.component.html'
})
export class Calendar3Component implements OnInit, OnDestroy {
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

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'calendar-3' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
