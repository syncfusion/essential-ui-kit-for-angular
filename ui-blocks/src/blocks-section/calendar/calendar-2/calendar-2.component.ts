import { Component, ViewChild, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule, AccordionModule, AccordionComponent } from '@syncfusion/ej2-angular-navigations';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { ButtonModule, CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { SliderModule, SliderComponent } from '@syncfusion/ej2-angular-inputs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-calendar-2',
    standalone: true,
    imports: [CommonModule, SidebarModule, AccordionModule, CalendarModule, ButtonModule, CheckBoxModule, SliderModule],
    templateUrl: './calendar-2.component.html'
})
export class Calendar2Component implements OnInit, OnDestroy {
    @ViewChild('slider') public hotelPriceSlider!: SliderComponent;
    /* SB Code - Start */
    @ViewChild('accordion1') public expandAccordion1!: AccordionComponent;
    @ViewChild('accordion2') public expandAccordion2!: AccordionComponent;
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public width: string = '310px';
    public sliderWidth: string = '230px';
    public tooltipInfo: { isVisible: boolean; placement: string; showOn: string; format: string } = { isVisible: true, placement: 'Before', showOn: 'Hover', format: 'c0' };
    private breakpointSubscription!: Subscription;

    constructor(private breakpointObserver: BreakpointObserver) { }

    public ngOnInit(): void {
        this.breakpointSubscription = this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe(result => {
            this.width = result.matches ? '100%' : '310px';
            this.sliderWidth = result.matches ? '100%' : '260px';
             setTimeout(() => {
                this.hotelPriceSlider.refresh();
            }, 1000);
        });
        /* SB Code - Start */
        window.addEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    /* SB Code - Start */
    public ngAfterViewInit(): void {
        this.refreshAccordion(2000);
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

    public refreshPriceSlider(): void {
        if (this.hotelPriceSlider) {
            this.hotelPriceSlider.refresh();
        }
    }

    /* SB Code - Start */
    private refreshAccordion(timeout: number): void {
        setTimeout(() => {
            this.expandAccordion1.refresh();
            this.expandAccordion2.refresh();    
        }, timeout);
    } 
 
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'calendar-2' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                    this.refreshAccordion(100);
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }  
    };
    /* SB Code - End */
}
