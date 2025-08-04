import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-list-1',
    standalone: true,
    imports: [CommonModule, ListViewModule, CheckBoxModule],
    templateUrl: './list-1.component.html'
})
export class List1Component implements OnInit, OnDestroy {
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public width!: string;

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

    public taskData: Object[] = [
        {
            id: '1',
            name: 'Sarah Lee',
            header: 'Finalize Project Plan',
            content: 'Refine the project plan to ensure all phases are outlined clearly.',
            date: new Date(2024, 2, 15),
            completed: true
        },
        {
            id: '2',
            name: 'Alex Carter',
            header: 'Prepare Budget Report',
            content: 'Compile and review the budget report for stakeholder presentation.',
            date: new Date(2024, 3, 10),
            completed: true
        },
        {
            id: '3',
            name: 'Emily Brown',
            header: 'Schedule Team Meeting',
            content: 'Organize a meeting to discuss milestones and next steps for the project.',
            date: new Date(2024, 3, 18),
            completed: false
        },
        {
            id: '4',
            name: 'Michael Green',
            header: 'Client Feedback Review',
            content: 'Review the feedback provided by the client and identify actionable items.',
            date: new Date(2024, 3, 22),
            completed: false
        },
        {
            id: '5',
            name: 'David Smith',
            header: 'Update Documentation',
            content: 'Ensure all project documentation is up-to-date and accessible for the team.',
            date: new Date(2024, 3, 29),
            completed: false
        }
    ];

    @HostListener('window:resize', ['$event'])
    public handleResize(event: UIEvent): void {
        const width = (event.target as Window).innerWidth;
        this.checkWindowSize(width);
    }

    public checkWindowSize(width: number): void {
        this.width = width < 1024 ? "width:100%" : "max-width:544px";
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'list-1' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
