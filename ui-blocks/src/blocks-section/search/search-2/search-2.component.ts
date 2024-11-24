import { Component, HostListener, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { AutoCompleteModule, AutoCompleteComponent } from '@syncfusion/ej2-angular-dropdowns';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';

@Component({
    selector: 'app-search-2',
    standalone: true,
    imports: [ButtonModule, AutoCompleteModule, ListViewModule],
    templateUrl: './search-2.component.html'
})
export class Search2Component implements OnInit, OnDestroy {
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
        this.width = window.innerWidth > 767 ? "max-width:400px" : "width:100%";
    }

    public ngOnDestroy(): void {
        /* SB Code - Start */
        window.removeEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    public data: Object[] = [
        {
            id: 1,
            text: 'Active Employees in HR',
            status: ''
        },
        {
            id: 2,
            text: 'Open Positions in Sales',
            status: ''
        },
        {
            id: 3,
            text: 'Employees with High Performance Ratings',
            status: ''
        },
        {
            id: 4,
            text: 'Training Programs Available',
            status: ''
        },
        {
            id: 5,
            text: 'Darlene Robertson',
            status: 'Offline'
        }
    ];

    @HostListener('window:resize', ['$event'])
    public onResize(event: Event): void {
        this.width = (event.target as Window).innerWidth > 767 ? "max-width:400px" : "width:100%";
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
                if (blockData.name === 'search-2' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
