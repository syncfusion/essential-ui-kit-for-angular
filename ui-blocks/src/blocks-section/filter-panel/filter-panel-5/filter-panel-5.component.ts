import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule, SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule, CheckBoxModule, SwitchModule, RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { SliderModule, SliderComponent } from '@syncfusion/ej2-angular-inputs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-filter-panel-5',
    standalone: true,
    imports: [CommonModule, SidebarModule, ButtonModule, CheckBoxModule, SwitchModule, RadioButtonModule, SliderModule],
    templateUrl: './filter-panel-5.component.html'
})
export class FilterPanel5Component implements OnInit, OnDestroy {
    @ViewChild('sidebar') public sidebar?: SidebarComponent;
    @ViewChild('slider') public hotelPriceSlider!: SliderComponent;
    /* SB Code - Start */

    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public width: string = '320px';
    public tooltipInfo: { isVisible: boolean; placement: string; showOn: string; } = { isVisible: true, placement: 'Before', showOn: 'Hover' };
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

    public ngAfterViewInit(): void {
        if (this.hotelPriceSlider) {
            this.hotelPriceSlider.refresh();
        }
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
                if (blockData.name === 'filter-panel-5' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
