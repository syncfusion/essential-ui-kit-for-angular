import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBarModule, BreadcrumbModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { RatingModule } from '@syncfusion/ej2-angular-inputs';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';

@Component({
    selector: 'app-tile-view-4',
    standalone: true,
    imports: [CommonModule, AppBarModule, BreadcrumbModule, ButtonModule, RatingModule, ListViewModule],
    templateUrl: './tile-view-4.component.html',
    styleUrl: './tile-view-4.component.css'
})
export class TileView4Component implements OnInit, OnDestroy {
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

    public busDetails: Object[] = [
        {
            id: 1,
            company: 'Skyline Travels',
            type: 'A/C Seater / Sleeper (2+1)',
            rating: 3,
            reviews: 4532,
            departureTime: '23:30',
            arrivalTime: '07:00',
            duration: '07:30',
            seats: 33,
            price: 34,
            logo: 'skyline-travels.png'
        },
        {
            id: 2,
            company: 'Delta Travels',
            type: 'A/C Seater',
            rating: 3,
            reviews: 123,
            departureTime: '20:30',
            arrivalTime: '03:30',
            duration: '07:00',
            seats: 20,
            price: 45,
            logo: 'delta-travels.png'
        },
        {
            id: 3,
            company: 'Naoka Travels',
            type: 'A/C Seater',
            rating: 4,
            reviews: 2344,
            departureTime: '19:00',
            arrivalTime: '03:00',
            duration: '07:00',
            seats: 18,
            price: 33,
            logo: 'naoka-travels.png'
        },
        {
            id: 4,
            company: 'Igloo Travels',
            type: 'A/C Seater',
            rating: 4.5,
            reviews: 23542,
            departureTime: '18:00',
            arrivalTime: '02:00',
            duration: '08:00',
            seats: 20,
            price: 30,
            logo: 'igloo-travels.png'
        }
    ];

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'tile-view-4' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
