import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-grid-10',
    standalone: true,
    imports: [CommonModule, GridModule, ButtonModule],
    templateUrl: './grid-10.component.html'
})
export class Grid10Component implements OnInit, OnDestroy {
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

    public gridData: Object[] = [
        {
            id: 1,
            product: "iPhone 13",
            productImage: 'iphone-3.png',
            unitSold: 15000,
            totalRevenue: 11250000,
            averageSellingPrice: 750,
            percentOfTotalSales: "18%",
            totalSalesRep: {
                name: "John Smith",
                initial: "JS",
                colorTheme: 'Orange',
            },
            returnRate: "2.5%"
        },
        {
            id: 2,
            product: "MacBook Air",
            productImage: 'ma-book-air.png',
            unitSold: 8000,
            totalRevenue: 8800000,
            averageSellingPrice: 1100,
            percentOfTotalSales: "14%",
            totalSalesRep: {
                name: "Emily Brown",
                initial: "EB",
                colorTheme: 'Green',
            },
            returnRate: "1.8%"
        },
        {
            id: 3,
            product: "AirPods Pro",
            productImage: 'airpods-pro.png',
            unitSold: 25000,
            totalRevenue: 6250000,
            averageSellingPrice: 250,
            percentOfTotalSales: "10%",
            totalSalesRep: {
                name: "Michael Davis",
                initial: "MD",
                colorTheme: 'Purple',
            },
            returnRate: "3.2%"
        },
        {
            id: 4,
            product: "iPad Air",
            productImage: 'ipad Air.png',
            unitSold: 12000,
            totalRevenue: 7200000,
            averageSellingPrice: 600,
            percentOfTotalSales: "11%",
            totalSalesRep: {
                name: "Sarah Wilson",
                initial: "SW",
                colorTheme: 'Orange',
            },
            returnRate: "2%"
        },
        {
            id: 5,
            product: "Apple Watch Series 7",
            productImage: 'apple-watch-series-7.png',
            unitSold: 10000,
            totalRevenue: 4000000,
            averageSellingPrice: 400,
            percentOfTotalSales: "6%",
            totalSalesRep: {
                name: "David Thompson",
                initial: "DT",
                colorTheme: 'Orange',
            },
            returnRate: "2.8%"
        },
        {
            id: 6,
            product: "iMac 24\"",
            productImage: 'imac-24.png',
            unitSold: 5000,
            totalRevenue: 7500000,
            averageSellingPrice: 1500,
            percentOfTotalSales: "12%",
            totalSalesRep: {
                name: "Lisa Martinez",
                initial: "LM",
                colorTheme: 'Red',
            },
            returnRate: "1.5%"
        },
        {
            id: 7,
            product: "Mac Mini",
            productImage: 'mac-mini.png',
            unitSold: 7000,
            totalRevenue: 4900000,
            averageSellingPrice: 700,
            percentOfTotalSales: "8%",
            totalSalesRep: {
                name: "Robert Johnson",
                initial: "RJ",
                colorTheme: 'Green',
            },
            returnRate: "1.2%"
        },
        {
            id: 8,
            product: "Air Tag",
            productImage: 'air-tag.png',
            unitSold: 50000,
            totalRevenue: 1500000,
            averageSellingPrice: 30,
            percentOfTotalSales: "2%",
            totalSalesRep: {
                name: "Jennifer Lee",
                initial: "JL",
                colorTheme: 'Blue',
            },
            returnRate: "0.8%"
        },
        {
            id: 9,
            product: "HomePod Mini",
            productImage: 'homepad-mini.png',
            unitSold: 15000,
            totalRevenue: 1500000,
            averageSellingPrice: 100,
            percentOfTotalSales: "2%",
            totalSalesRep: {
                name: "William Turner",
                initial: "WT",
                colorTheme: 'Purple',
            },
            returnRate: "1.2%"
        },
        {
            id: 10,
            product: "Apple TV 4K",
            productImage: 'apple-tv-4k.png',
            unitSold: 8000,
            totalRevenue: 1440000,
            averageSellingPrice: 180,
            percentOfTotalSales: "2%",
            totalSalesRep: {
                name: "Emma Watson",
                initial: "EW",
                colorTheme: 'Purple',
            },
            returnRate: "0.8%"
        }
    ];

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'grid-10' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
