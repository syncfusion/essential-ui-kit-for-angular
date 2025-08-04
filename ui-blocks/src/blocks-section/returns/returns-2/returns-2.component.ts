import { Component, HostListener, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, CheckBoxModule, RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { StepperModule, StepperComponent } from '@syncfusion/ej2-angular-navigations';
import { MessageModule } from '@syncfusion/ej2-angular-notifications';

@Component({
    selector: 'app-returns-2',
    standalone: true,
    imports: [CommonModule, StepperModule, GridModule, RadioButtonModule, ButtonModule, MessageModule, CheckBoxModule],
    templateUrl: './returns-2.component.html'
})
export class Returns2Component implements OnInit, OnDestroy {
    /* SB Code - Start */
    @ViewChild('stepper') public stepper!: StepperComponent;
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public stepperStyle: string = '';
    public stepperOrientation: 'horizontal' | 'vertical' = 'horizontal';
    public labelPos: string = 'bottom';
    public wrapOption: { wrapMode: string } = { wrapMode: 'Content' };
    public data: Array<{ product: { productName: string; productImage: string }; orderNumber: string; returnTerm: Date }> = [
        {
            product: {
                productName: 'Apple iPhone 15 Pro Max (256 GB) - Blue Titanium',
                productImage: 'apple-iphone-15-pro'
            },
            orderNumber: '#49463',
            returnTerm: new Date(2017, 7, 15)
        },
        {
            product: {
                productName: 'Apple MacBook Air 2022 (13.6-inch, M2, 8GB, 256GB, macOS, Midnight)',
                productImage: 'apple-macbook-air-2022'
            },
            orderNumber: '#40938',
            returnTerm: new Date(2022, 9, 28)
        },
        {
            product: {
                productName: 'Apple AirPods Pro (2nd Generation - USB-C) TWS Earbuds with Active Noise',
                productImage: 'apple-airpods-pro'
            },
            orderNumber: '#50929',
            returnTerm: new Date(2020, 5, 12)
        }
    ];

    constructor() { }

    public ngOnInit(): void {
        /* SB Code - Start */
        window.addEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
        this.checkWindowSize(window.innerWidth);
    }

    /* SB Code - Start */
    public ngAfterViewInit(): void {
        this.refreshStepper(2000);
    }
    /* SB Code - End */

    public ngOnDestroy(): void {
        /* SB Code - Start */
        window.removeEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    @HostListener('window:resize', ['$event'])
    public handleResize(event: UIEvent): void {
        const width = (event.target as Window).innerWidth;
        this.checkWindowSize(width);
        /* SB Code - Start */
        this.stepper.refresh();
        /* SB Code - End */
    }

    private checkWindowSize(width: number): void {
        const isVertical = width < 640;
        this.stepperOrientation = isVertical ? 'vertical' : 'horizontal';
        this.stepperStyle = isVertical ? 'min-height:286px' : '';
        this.labelPos = isVertical ? 'end' : 'bottom';
    }

    /* SB Code - Start */
    private refreshStepper(timeout: number): void {
        setTimeout(() => {
            this.stepper.refreshProgressbar();
        }, timeout);
    }

    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'returns-2' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
        this.refreshStepper(1000);
    };
    /* SB Code - End */
}
