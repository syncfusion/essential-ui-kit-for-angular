import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule, SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule, SwitchModule, RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ChipListModule, ChipListComponent } from '@syncfusion/ej2-angular-buttons';
import { RatingModule } from '@syncfusion/ej2-angular-inputs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-filter-panel-7',
    standalone: true,
    imports: [CommonModule, SidebarModule, ButtonModule, SwitchModule, RadioButtonModule, ChipListModule, RatingModule],
    templateUrl: './filter-panel-7.component.html',
    styleUrl: './filter-panel-7.component.css'
})
export class FilterPanel7Component implements OnInit, OnDestroy {
    @ViewChild('sidebar') public sidebar?: SidebarComponent;
    @ViewChild('chipFilter') chipList!: ChipListComponent;
    public width: string = '320px';
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
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

    public updateSelectedChips(event: any) {
        const chipElement = event.element;
        if (chipElement.classList.contains('e-active')) {
            chipElement.classList.add('e-primary');
        } else {
            chipElement.classList.remove('e-primary');
        }
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'filter-panel-7' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
