import { Component, OnInit, OnDestroy, ViewChild,  HostListener } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { AutoCompleteModule, AutoCompleteComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
    selector: 'app-ai-search-1',
    standalone: true,
    imports: [ButtonModule, AutoCompleteModule],
    templateUrl: './ai-search-1.component.html',
    styleUrl: './ai-search-1.component.css'
})
export class AiSearch1Component implements OnInit, OnDestroy {
    @ViewChild('search') public search!: AutoCompleteComponent;
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public searchKeyword: string = 'Documentation';
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

    @HostListener('window:resize', ['$event'])
    public handleResize(event: Event): void {
        this.width = (event.target as Window).innerWidth > 767 ? "max-width:400px" : "width:100%";
        this.search.hidePopup();
        const searchInterval = setInterval(() => {
            this.search.showPopup();
        }, 250);
        setTimeout(() => clearInterval(searchInterval), 1000);
    }

    public filtering(event:any ): void {
        this.searchKeyword = event.text?.trim() ? event.text : 'Documentation';
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
                if (blockData.name === 'ai-search-1' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
