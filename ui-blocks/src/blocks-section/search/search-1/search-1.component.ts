import { Component, HostListener, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteModule, AutoCompleteComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
    selector: 'app-search-1',
    standalone: true,
    imports: [CommonModule, AutoCompleteModule],
    templateUrl: './search-1.component.html'
})
export class Search1Component implements OnInit, OnDestroy {
    @ViewChild('search') public search!: AutoCompleteComponent;
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public width!: string;

    constructor() { }

    public ngOnInit(): void {
        /* SB Code - Start */
        window.addEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
        this.width = window.innerWidth > 767 ? "max-width:520px" : "width:100%";
    }

    public ngOnDestroy(): void {
        /* SB Code - Start */
        window.removeEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    public data: Object[] = [
        {
            id: 1,
            category: 'Frequently used',
            title: 'Linear',
            text: 'Fix login bug',
            avatar: ['avatar-1.jpg', 'avatar-2.jpg', 'avatar-3.jpg', 'avatar-4.jpg'],
            image: 'linear.svg',
        },
        {
            id: 2,
            category: 'Frequently used',
            title: 'Zoom',
            text: 'Team meeting on project planning',
            avatar: ['avatar-1.jpg', 'avatar-2.jpg', 'avatar-3.jpg'],
            image: 'zoom.svg',
        },
        {
            id: 3,
            category: 'Frequently used',
            title: 'GitHub',
            text: 'Code review for development',
            avatar: ['avatar-1.jpg', 'avatar-2.jpg'],
            image: 'github.svg',
        },
        {
            id: 4,
            category: 'Utilities',
            title: 'Automations',
            text: 'Set up automations and shortcuts',
            tag: 'Automation'
        },
        {
            id: 5,
            category: 'Utilities',
            title: 'Log History',
            text: 'Search and monitor logs and achieved logs',
            tag: 'Logging'
        },
        {
            id: 6,
            category: 'Utilities',
            title: 'Import Integration',
            text: 'Add a new integration to your organization',
            tag: 'Integration'
        }
    ];

    @HostListener('window:resize', ['$event'])
    public onResize(event: Event): void {
        this.width = (event.target as Window).innerWidth > 767 ? "max-width:520px" : "width:100%";
        this.search.hidePopup();
        const searchInterval = setInterval(() => {
            this.search.showPopup();
        }, 250);
        setTimeout(() => clearInterval(searchInterval), 1000);
    }

    public openPopup(args: any): void {
        var searchIcon = document.createElement('span');
        searchIcon.style.cssText = 'display: flex; align-items: center; margin-left: 10px;';
        searchIcon.setAttribute('class', 'e-icons e-search');
        args.inputWrapper.container.insertAdjacentElement('afterbegin', searchIcon);
        setTimeout(() => {
            this.search.showPopup();
        }, 2000);
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'search-1' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
