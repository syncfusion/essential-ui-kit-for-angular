import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';

@Component({
    selector: 'app-list-4',
    standalone: true,
    imports: [CommonModule, ListViewModule, ButtonModule, TextBoxModule],
    templateUrl: './list-4.component.html'
})
export class List4Component implements OnInit, OnDestroy {
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

    public data: Object[] = [
        {
            id: '1',
            header: 'Nike Air Max 270',
            size: '8',
            color: 'White',
            seller: 'Meyaar',
            amount: '$150.00',
            badge: '10% off',
            pic: 'nike-white.png'
        },
        {
            id: '2',
            header: 'Adidas Ultraboost 22',
            size: '8',
            color: 'Red',
            seller: 'Meyaar',
            amount: '$180.00',
            badge: '',
            pic: 'adidas-red.png'
        },
        {
            id: '3',
            header: 'Puma RS-X3 Super',
            size: '8',
            color: 'Mixed',
            seller: 'Meyaar',
            amount: '$120.00',
            badge: '10% off',
            pic: 'puma-mixed.png'
        },
        {
            id: '4',
            header: 'New Balance 574 Classic',
            size: '8',
            color: 'Black',
            seller: 'Meyaar',
            amount: '$100.00',
            badge: '',
            pic: 'puma-black.png'
        },
        {
            id: '5',
            header: 'Reebok Zig Kinetica II',
            size: '8',
            color: 'Green',
            seller: 'Meyaar',
            amount: '$140.00',
            badge: '10% off',
            pic: 'reebok-green.png'
        }
    ]


    @HostListener('window:resize', ['$event'])
    public onResize(event: UIEvent): void {
        const width = (event.target as Window).innerWidth;
        this.checkWindowSize(width);
    }

    public checkWindowSize(width: number): void {
        this.width = width < 1024 ? "width:100%" : "max-width:608px";
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'list-4' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
