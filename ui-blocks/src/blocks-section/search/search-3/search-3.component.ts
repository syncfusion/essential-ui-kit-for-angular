import { Component, HostListener, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { CommonModule } from '@angular/common';
import { AutoCompleteModule, AutoCompleteComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
    selector: 'app-search-3',
    standalone: true,
    imports: [ListViewModule, CommonModule, AutoCompleteModule],
    templateUrl: './search-3.component.html'
})
export class Search3Component implements OnInit, OnDestroy {
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
        this.width = window.innerWidth > 767 ? "max-width:480px" : "width:100%";
    }

    public ngOnDestroy(): void {
        /* SB Code - Start */
        window.removeEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    public data: Object[] = [
        {
            id: 1,
            name: 'Johnson'
        },
        {
            id: 2,
            name: 'White'
        },
        {
            id: 3,
            name: 'Harris'
        },
        {
            id: 4,
            name: 'Jane Smith',
            initial: 'JS',
            emailId: 'jane.smith@example.com'
        },
        {
            id: 5,
            name: 'Mark Johnson',
            initial: 'MJ',
            emailId: 'markjohnson@example.com'
        },
        {
            id: 6,
            name: 'Tom Harris',
            initial: 'TH',
            emailId: 'tomharris@example.com'
        }
    ];

    @HostListener('window:resize', ['$event'])
    public onResize(event: Event): void {
        this.width = (event.target as Window).innerWidth > 767 ? "max-width:480px" : "width:100%";
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
                if (blockData.name === 'search-3' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
