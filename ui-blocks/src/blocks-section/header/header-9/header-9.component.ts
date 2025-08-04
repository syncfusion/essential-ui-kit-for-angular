import { Component, OnInit, OnDestroy, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule, BreadcrumbOverflowMode, BreadcrumbComponent } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownButtonModule, SplitButtonModule, DropDownButtonComponent, SplitButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
    selector: 'app-header-9',
    standalone: true,
    imports: [CommonModule, BreadcrumbModule, ButtonModule, DropDownButtonModule, SplitButtonModule],
    templateUrl: './header-9.component.html',
    styleUrl: './header-9.component.css'
})
export class Header9Component implements OnInit, OnDestroy {
    @ViewChild('breadcrumb') breadcrumb!: BreadcrumbComponent;
    @ViewChild('newCourseDropdown') public newCourseDropdown!: SplitButtonComponent;
    @ViewChild('additionalOptionDropdown') public additionalOptionDropdown!: DropDownButtonComponent;
    public overflowMode: BreadcrumbOverflowMode = BreadcrumbOverflowMode.None;
    public width!: string;
    public maxItems: number = 2;
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */

    constructor() { }

    public ngOnInit(): void {
        /* SB Code - Start */
        window.addEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    /* SB Code - Start */
    public ngAfterViewInit(): void {
        this.newCourseDropdown.refresh();
    }
    /* SB Code - End */

    public ngOnDestroy(): void {
        /* SB Code - Start */
        window.removeEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    @HostListener('window:resize', ['$event'])
    public handleResize(event: UIEvent): void {
        const width = (event.target as Window).innerWidth;
        this.updateBreadcrumbItems(width);
        this.closeDropdown();
        /* SB Code - Start */
        this.newCourseDropdown.refresh();
        /* SB Code - End */
    }

    public updateBreadcrumbItems(width: number): void {
        if (width < 640) {
            this.maxItems = 1;
        } else {
            this.maxItems = 2;
        }
        this.overflowMode = this.maxItems <= 2 ? BreadcrumbOverflowMode.Menu : BreadcrumbOverflowMode.None;
        this.breadcrumb.refresh();
    }

    public closeDropdown(): void {
        if (this.newCourseDropdown.activeElem[1].classList.contains('e-active')) {
            this.newCourseDropdown.toggle();
        }
        if (this.additionalOptionDropdown.element.classList.contains('e-active')) {
            this.additionalOptionDropdown.toggle();
        }
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'header-9' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                    setTimeout(() => {
                        this.breadcrumb.refresh();
                    }, 250);
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
