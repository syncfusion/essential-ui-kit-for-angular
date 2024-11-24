import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBarModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule, SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';

@Component({
    selector: 'app-tile-view-5',
    standalone: true,
    imports: [CommonModule, AppBarModule, ButtonModule, SwitchModule, DropDownButtonModule, ListViewModule],
    templateUrl: './tile-view-5.component.html',
    styleUrl: './tile-view-5.component.css'
})
export class TileView5Component implements OnInit, OnDestroy {
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */

    constructor() { }

    public ngOnInit(): void {
        /* SB Code - Start */
        window.addEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    public ngOnDestroy(): void {
        /* SB Code - Start */
        window.removeEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    public jobDetails: Object[] = [
        {
            id: 1,
            title: 'Embedded Power Electronics Design Engineer (Entry-Level)',
            company: 'Nokia Solutions Pvt. Ltd',
            reviews: 343,
            experience: '0-2 yrs',
            salary: '8-12 Lacs PA',
            location: 'USA',
            posted: '2 days ago',
            openings: 1,
            applicants: 927,
            logo: 'nokia.png'
        },
        {
            id: 2,
            title: 'Walk in Interview_Salesforce Developer',
            company: 'Delta Solutions Pvt. Ltd',
            reviews: 4567,
            experience: '0-5 yrs',
            salary: '6-10 Lacs PA',
            location: 'UK',
            posted: '4 days ago',
            openings: 4,
            applicants: 234,
            logo: 'salesforce.png'
        },
        {
            id: 3,
            title: 'Walk in Interview_Salesforce Developer',
            company: 'Cisco Solutions Pvt. Ltd',
            reviews: 4567,
            experience: '2-5 yrs',
            salary: '10-16 Lacs PA',
            location: 'France',
            posted: '8 days ago',
            openings: 2,
            applicants: 12,
            logo: 'cisco.png'
        }
    ];

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'tile-view-5' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
