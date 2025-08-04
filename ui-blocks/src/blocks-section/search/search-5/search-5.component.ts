import { Component, HostListener, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { AutoCompleteModule, AutoCompleteComponent } from '@syncfusion/ej2-angular-dropdowns';
import { ChipListModule } from '@syncfusion/ej2-angular-buttons';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-search-5',
    standalone: true,
    imports: [AutoCompleteModule, ChipListModule, CommonModule],
    templateUrl: './search-5.component.html',
    styleUrl: './search-5.component.css'
})
export class Search5Component implements OnInit, OnDestroy {
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
            id: '#23568',
            ticket: 'Unable to Log In to the Application',
            createdDate: 'October 5, 2024',
            fontIcon: 'e-icons e-circle-info',
            colorTheme: 'Green'
        },
        {
            id: '#23562',
            ticket: 'Software Update Error',
            createdDate: 'October 1, 2024',
            fontIcon: 'e-icons e-reset',
            colorTheme: 'Orange'
        },
        {
            id: '#23556',
            ticket: 'Feature Request: Dark Mode',
            createdDate: 'September 28, 2024',
            fontIcon: 'e-icons e-objects',
            colorTheme: 'Blue'
        },
        {
            id: '#23554',
            ticket: 'API Documentation Missing',
            createdDate: 'September 25, 2024',
            fontIcon: 'e-icons e-file-new',
            colorTheme: 'Red'
        },
        {
            id: '#23548',
            ticket: 'Unable to Generate Reports',
            createdDate: 'September 21, 2024',
            fontIcon: 'e-icons e-circle-info',
            colorTheme: 'Indigo'
        },
        {
            id: '#23547',
            ticket: 'Multi-Language Support',
            createdDate: 'September 19, 2024',
            fontIcon: 'e-icons e-paragraph',
            colorTheme: 'Green'
        }
    ];

    @HostListener('window:resize', ['$event'])
    public handleResize(event: Event): void {
        this.width = (event.target as Window).innerWidth > 767 ? "max-width:480px" : "width:100%";
        this.search.hidePopup();
        const searchInterval = setInterval(() => {
            this.search.showPopup();
        }, 250);
        setTimeout(() => clearInterval(searchInterval), 1000);
    }

    public openPopup(args: any): void {
        var searchIcon = document.createElement('span');
        searchIcon.setAttribute('class', 'e-icons e-search');
        args.inputWrapper.container.insertAdjacentElement('afterbegin', searchIcon);
        setTimeout(() => {
            this.search.showPopup();
        }, 2000);
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'search-5' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
