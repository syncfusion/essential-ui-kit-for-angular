import { Component, OnInit, OnDestroy } from '@angular/core';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { TextBoxModule, TextAreaModule, MaskedTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { ButtonModule, RadioButtonModule, CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-checkout-3',
    standalone: true,
    imports: [DropDownListModule, TextBoxModule, RadioButtonModule, ButtonModule, CheckBoxModule, TextAreaModule, MaskedTextBoxModule, GridModule, CommonModule],
    templateUrl: './checkout-3.component.html'
})
export class Checkout3Component implements OnInit, OnDestroy {
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

    public data: Object[] = [
        {
            id: 1,
            image: "apple-magsafe.png",
            description: "Apple MagSafe Charger (for iPhone, AirPods Pro, AirPods with Wireless Charging Case)",
            quantity: 1,
            amount: "$2,000"
        },
        {
            id: 2,
            image: "apple-iPad.png",
            description: "Apple iPad (10th Generation): With A14 Bionic Chip, 27.69 cm (10.9″) Liquid Retina Display, 64GB, Wi-Fi 6, 12MP Front/12MP Back Camera, Touch ID, All-Day Battery Life – Blue",
            quantity: 1,
            amount: "$2,000"
        },
        {
            id: 3,
            image: "apple-macbook-air.png",
            description: "Apple MacBook Air Laptop: M1 Chip, 13.3-Inch (33.74 cm) Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Grey",
            quantity: 1,
            amount: "$1,000"
        },
        {
            id: 4,
            image: "apple-magic-keyboard.png",
            description: "Apple Magic Keyboard - US English – Silver (For Mac with macOS 11.3 or later, iPad running iPadOS 14.5 or later)",
            quantity: 1,
            amount: "$1,000"
        },
        {
            id: 5,
            image: "apple-magic-mouse.png",
            description: "Apple Magic Mouse (For Bluetooth-Enabled Mac with OS X 10.11 or later, iPad with iPadOS 13.4 or later)",
            quantity: 1,
            amount: "$1,000"
        },
        {
            id: 6,
            image: "apple-iphone-charger.png",
            description: "Original iPhone Charger: 20W Fast USB Type-C Adapter for iPhone 15/15 Plus/15 Pro/15 Pro Max, iPhone 14/14 Plus/14 Pro/14 Pro Max, iPhone 13/12/11 & Others. PD 3.0, 20 Watt, BIS Certified, 2 Years Warranty",
            quantity: 1,
            amount: "$1,900"
        },
    ];

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'checkout-3' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
