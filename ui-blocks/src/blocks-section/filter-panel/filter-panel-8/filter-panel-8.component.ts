import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule, AccordionModule, SidebarComponent, AccordionComponent } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule, CheckBoxModule, SwitchModule, RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-filter-panel-8',
    standalone: true,
    imports: [CommonModule, SidebarModule, AccordionModule, ButtonModule, CheckBoxModule, SwitchModule, RadioButtonModule],
    templateUrl: './filter-panel-8.component.html'
})
export class FilterPanel8Component implements OnInit, OnDestroy {
    @ViewChild('sidebar') public sidebar?: SidebarComponent;
    /* SB Code - Start */
    @ViewChild('gettingStartedAccordion') public gettingStartedAccordion!: AccordionComponent;
    @ViewChild('billingAccordion') public billingAccordion!: AccordionComponent;
    @ViewChild('supportAccordion') public supportAccordion!: AccordionComponent;
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public width: string = '320px';
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
        this.refreshAccordion(3000);
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
    private refreshAccordion(timeout: number): void {
        setTimeout(() => {
            this.gettingStartedAccordion.refresh();
            this.billingAccordion.refresh();
            this.supportAccordion.refresh();
        }, timeout);
    }

    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'filter-panel-8' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
        this.refreshAccordion(1000);
    };
    /* SB Code - End */
}
