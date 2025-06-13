import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteModule, AutoCompleteComponent } from '@syncfusion/ej2-angular-dropdowns';
import { TabModule, TabComponent } from '@syncfusion/ej2-angular-navigations';
@Component({
    selector: 'app-ai-search-2',
    standalone: true,
    imports: [CommonModule, AutoCompleteModule, TabModule],
    templateUrl: './ai-search-2.component.html',
    styleUrl: './ai-search-2.component.css'
})
export class AiSearch2Component implements OnInit, OnDestroy {
    @ViewChild('search') public search!: AutoCompleteComponent;
    @ViewChild('tab') public tab!: TabComponent;
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public overflowMode: string = 'Popup';
    public width!: string;
    public isTabSwitch: boolean = false;
    public filteredData: any[] = [];

    public data: any[] = [
        {
            id: 1,
            name: "Bob Johnson",
            status: "Last active 5 minutes ago",
            image: "avatar-1.jpg",
            category: "Team"
        },
        {
            id: 2,
            name: "Marketing site brief",
            status: "Added by Bob Johnson in Sisyphus",
            category: "Files"
        },
        {
            id: 3,
            name: "Site UX research notes",
            status: "Added by Bob Johnson in Sisyphus",
            category: "Files"
        },
        {
            id: 4,
            name: "Book ideas (Draft 01)",
            status: "Added by Bob Johnson in Untitled Labs",
            category: "Files"
        },
        {
            id: 5,
            name: "Sisyphus website redesign",
            status: "Project added by Bob Johnson February 20, 2023",
            category: "Project"
        },
        {
            id: 6,
            name: "Untitled Labs launch",
            status: "Project added by Bob Johnson February 20, 2023",
            category: "Project"
        }
    ];

    constructor() { }

    public ngOnInit(): void {
        /* SB Code - Start */
        window.addEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
        this.filteredData = [...this.data];
        this.width = window.innerWidth > 767 ? "max-width:534px" : "width:100%";
    }

    public ngOnDestroy(): void {
        /* SB Code - Start */
        window.removeEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

     public ngAfterViewInit(): void {
        this.updateTabItems();
    }

    public updateTabItems(): void {
        if (window.innerWidth < 640) {
            this.overflowMode = 'Popup';
        } else {
            this.overflowMode = 'None';
        }
    }

    public onSelect(event: any): void {
        this.isTabSwitch = true;
        let selectedItem = event.selectedItem?.querySelector('.e-tab-text')?.firstElementChild?.children[0]?.textContent;
        this.filteredData = selectedItem === 'All results' ? [...this.data] : this.data.filter(item => item.category === selectedItem);
        if (this.search) {
            this.search.dataSource = this.filteredData;
            this.search.dataBind();
            this.search.showPopup();
        }  
    };

    public onClose(args: any): void {
        if (this.isTabSwitch) {
            args.cancel = true;
        }
    }

    public onSearchClick(search: any): void {
        search.beforePopupOpen = true;
        this.isTabSwitch = false;
    }

    @HostListener('window:resize', ['$event'])
    public onResize(event: Event): void {
        this.width = (event.target as Window).innerWidth > 767 ? "max-width:534px" : "width:100%";
        this.isTabSwitch = false;
        this.updateTabItems();
        this.search.hidePopup();
        const searchInterval = setInterval(() => {
            this.filteredData =[...this.data];
            this.search.showPopup();
        }, 350);
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
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-search-2' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
