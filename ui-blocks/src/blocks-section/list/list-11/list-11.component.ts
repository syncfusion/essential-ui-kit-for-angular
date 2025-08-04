import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewModule, ListViewComponent } from '@syncfusion/ej2-angular-lists';
import { BreadcrumbModule, BreadcrumbOverflowMode, BreadcrumbComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-list-11',
    standalone: true,
    imports: [CommonModule, ListViewModule, BreadcrumbModule],
    templateUrl: './list-11.component.html',
    styleUrl: './list-11.component.css'
})
export class List11Component implements OnInit, OnDestroy {
    @ViewChild('listview') public listview!: ListViewComponent;
    @ViewChild('breadcrumb') breadcrumb!: BreadcrumbComponent;
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public overflowMode: BreadcrumbOverflowMode = BreadcrumbOverflowMode.None;
    public width!: string;
    public maxItems: number = 4;

    constructor() { }

    public ngOnInit(): void {
        /* SB Code - Start */
        window.addEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
        this.checkWindowSize(window.innerWidth);
    }

    public ngOnDestroy(): void {
        /* SB Code - Start */
        window.removeEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    public files: Object[] = [
        {
            id: 1,
            fileName: "Project_Presentation_2024_V1.pptx",
            data1: "Documents",
            data2: "Presentations",
            data3: "Project Presentations",
            data4: "2024",
            image: "ppt.png"
        },
        {
            id: 2,
            fileName: "Inventory_Tracking_Sheet_August.xlsx",
            data1: "Documents",
            data2: "Finance",
            data3: "Quarterly Reports",
            data4: "Q3 2024",
            image: "excel.png"
        },
        {
            id: 3,
            fileName: "Brainstorming_Session_Notes_2024.txt",
            data1: "Documents",
            data2: "Notes",
            data3: "Brainstorming Sessions",
            data4: "September",
            image: "notes.png"
        },
        {
            id: 4,
            fileName: "Feedback_Form_Event_September_2024",
            data1: "Drive",
            data2: "Forms",
            data3: "Event Feedback",
            data4: "2024",
            image: "icon.png"
        },
        {
            id: 5,
            fileName: "Team_Policies_and_Procedures.docx",
            data1: "Documents",
            data2: "Policies",
            data3: "Team UX",
            data4: "2024",
            image: "docx.png"
        }
    ]

    @HostListener('window:resize', ['$event'])
    public handleResize(event: UIEvent): void {
        const width = (event.target as Window).innerWidth;
        this.checkWindowSize(width);
        this.updateBreadcrumbItems();
        this.breadcrumb.refresh();
    }

    public checkWindowSize(width: number): void {
        this.width = width < 1024 ? "width:100%" : "max-width:610px";
    }

    public actionComplete(): void {
        setTimeout(() => {
            this.updateBreadcrumbItems();
        }, 200)
    }

    public updateBreadcrumbItems(): void {
        let width = this.listview.element.getBoundingClientRect().width;
        if (width <= 360) {
            this.maxItems = 1;
        } else if (width <= 520) {
            this.maxItems = 2;
        } else if (width <= 550) {
            this.maxItems = 3;
        } else {
            this.maxItems = 4;
        }
        this.overflowMode = this.maxItems <= 2 ? BreadcrumbOverflowMode.Menu : BreadcrumbOverflowMode.None;
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'list-11' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                    this.overflowMode = BreadcrumbOverflowMode.None;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
