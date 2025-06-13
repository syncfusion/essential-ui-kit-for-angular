import { Component, OnInit, OnDestroy, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule, SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { DropDownButtonModule, DropDownButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';
import { ButtonModule, SwitchModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-ai-setting-1',
    standalone: true,
    imports: [CommonModule, SidebarModule, ListViewModule, DropDownButtonModule, ButtonModule, SwitchModule],
    templateUrl: './ai-setting-1.component.html',
    styleUrl: './ai-setting-1.component.css'
})
export class AiSetting1Component implements OnInit, OnDestroy {
    @ViewChild('sidebar') sidebar!: SidebarComponent;
    /* SB Code - Start */
    @ViewChild('themeDropdown') public themeDropdown!: DropDownButtonComponent;
    @ViewChild('languageDropdown') public languageDropdown!: DropDownButtonComponent;
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public isMobileView: boolean = false;
    public preventSidebarClose: boolean = true;

    public navigationMenu: Object[] = [
        { id: 1, field: 'General', fontIcon: 'e-settings' },
        { id: 2, field: 'Account', fontIcon: 'e-user' },
        { id: 3, field: 'Data controls', fontIcon: 'e-increase-indent' },
        { id: 4, field: 'Chat settings', fontIcon: 'e-comment-show' }
    ];

    constructor() { }

    public ngOnInit(): void {
        /* SB Code - Start */
        window.addEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    public ngAfterViewInit(): void {
        setTimeout(() => {
            this.checkWindowSize();
        }, 200);
    }

    public ngOnDestroy(): void {
        /* SB Code - Start */
        window.removeEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    @HostListener('window:resize')
    public onResize(): void {
        this.checkWindowSize();
        /* SB Code - Start */
        this.closeDropdown(this.themeDropdown);
        this.closeDropdown(this.languageDropdown);
        /* SB Code - End */
    }

    public checkWindowSize(): void {
        this.isMobileView = window.innerWidth <= 680;
        this.sidebar.hide();
        setTimeout(() => {
            this.sidebar.type = this.isMobileView ? "Over" : "Push";
            this.preventSidebarClose = !this.isMobileView;
            this.sidebar.show();
            this.sidebar.refresh();
        }, 5);
    }

    /* SB Code - Start */
    public closeDropdown(dropDown: DropDownButtonComponent): void {
        if (dropDown.element.classList.contains('e-active')) {
            dropDown.toggle();
        }
    }

    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-setting-1' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
