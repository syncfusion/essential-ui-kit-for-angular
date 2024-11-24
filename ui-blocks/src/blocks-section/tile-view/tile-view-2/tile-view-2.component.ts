import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBarModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule, SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { BreadcrumbModule } from '@syncfusion/ej2-angular-navigations';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';

@Component({
    selector: 'app-tile-view-2',
    standalone: true,
    imports: [CommonModule, AppBarModule, ButtonModule, SwitchModule, BreadcrumbModule, DropDownButtonModule, NumericTextBoxModule, ListViewModule],
    templateUrl: './tile-view-2.component.html',
    styleUrl: './tile-view-2.component.css'
})
export class TileView2Component implements OnInit, OnDestroy {
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

    public productDetails: Object[] = [
        {
            id: 1,
            name: 'Apple iPhone 14 Pro (256GB) - Deep Purple',
            description: '5000+ bought last month',
            price: 1099,
            originalPrice: 1199,
            discount: '10% OFF',
            status: 'Available',
            deliveryType: 'Free delivery',
            image: 'apple-iphone-14-deep-purple.png'
        },
        {
            id: 2,
            name: 'Apple iPad Air (5th Generation) Wi-Fi, 64GB - Space Gray',
            description: '3000+ bought last month',
            price: 559,
            originalPrice: 599,
            discount: '10% OFF',
            status: 'Available',
            deliveryType: 'Free delivery',
            image: 'apple-ipad-air-space-gray.png'
        },
        {
            id: 3,
            name: 'Apple MacBook Air Laptop M2 chip, 13.6-inch Liquid Retina Display, 8GB RAM, 256GB SSD Storage - Midnight',
            description: '2000+ bought last month',
            price: 1049,
            originalPrice: 1199,
            discount: '13% OFF',
            status: 'Available',
            deliveryType: 'Free delivery',
            image: 'apple-macbook-midnight.png'
        }
    ];

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'tile-view-2' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
