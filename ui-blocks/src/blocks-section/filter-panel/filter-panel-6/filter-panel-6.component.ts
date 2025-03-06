import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule, AccordionModule, SidebarComponent, AccordionComponent } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule, CheckBoxModule, SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { AutoCompleteModule, AutoCompleteComponent } from '@syncfusion/ej2-angular-dropdowns';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filter-panel-6',
  standalone: true,
  imports: [CommonModule, SidebarModule, AccordionModule, ButtonModule, CheckBoxModule, SwitchModule, AutoCompleteModule],
  templateUrl: './filter-panel-6.component.html'
})
export class FilterPanel6Component implements OnInit, OnDestroy {
    @ViewChild('sidebar') public sidebar?: SidebarComponent;
    @ViewChild('search') public autoComplete!: AutoCompleteComponent;

    /* SB Code - Start */
    @ViewChild('industryAccordion') public industryAccordion!: AccordionComponent;
    @ViewChild('sizeAccordion') public sizeAccordion!: AccordionComponent;
    @ViewChild('locationAccordion') public locationAccordion!: AccordionComponent;
    @ViewChild('typeAccordion') public typeAccordion!: AccordionComponent;
    
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public width: string = '320px';
    public tooltipInfo: { isVisible: boolean; placement: string; showOn: string; format: string } = { isVisible: true, placement: 'Before', showOn: 'Hover', format: 'c0' };
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
            this.industryAccordion.refresh();
            this.sizeAccordion.refresh();
            this.locationAccordion.refresh();
            this.typeAccordion.refresh();
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

    public openPopup(args: any): void {
        this.addSearchIcon(args.inputWrapper.container);
    }

    private addSearchIcon(container: HTMLElement | null): void {
        if (container && !container.querySelector('.e-search')) {
            let searchIcon = document.createElement('span');
            searchIcon.className = 'e-icons e-search';
            searchIcon.style.cssText = 'display: flex; align-items: center; margin-left: 10px;';
            container.insertAdjacentElement('afterbegin', searchIcon);
        }
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'filter-panel-6' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
