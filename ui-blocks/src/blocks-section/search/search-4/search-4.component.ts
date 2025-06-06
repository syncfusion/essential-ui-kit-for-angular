import { Component, HostListener, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteModule, AutoCompleteComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
    selector: 'app-search-4',
    standalone: true,
    imports: [CommonModule, AutoCompleteModule],
    templateUrl: './search-4.component.html'
})
export class Search4Component implements OnInit, OnDestroy {
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
            name: 'Mark Johnson',
            initial: 'MJ',
            emailId: 'mark.johnson@example.com',
            colorTheme: 'Orange'
        },
        {
            id: 2,
            name: 'Emily White',
            initial: 'EW',
            emailId: 'emily.white@example.com',
            colorTheme: 'Blue'
        },
        {
            id: 3,
            name: 'Tom Harris',
            initial: 'TH',
            emailId: 'tom.harris@example.com',
            colorTheme: 'Blue'
        },
        {
            id: 4,
            name: 'Lisa Green',
            initial: 'LG',
            emailId: 'lisa.green@example.com',
            colorTheme: 'Orange'
        },
        {
            id: 5,
            name: 'David Clark',
            initial: 'DC',
            emailId: 'david.clark@example.com',
            colorTheme: 'Red'
        },
        {
            id: 6,
            name: 'Rachel Lee',
            initial: 'RL',
            emailId: 'rachel.lee@example.com',
            colorTheme: 'Blue'
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
                if (blockData.name === 'search-4' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
