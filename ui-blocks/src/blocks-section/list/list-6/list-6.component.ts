import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { ListBoxAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-list-6',
    standalone: true,
    imports: [ListBoxAllModule, ButtonModule],
    templateUrl: './list-6.component.html',
    styleUrl: './list-6.component.css'
})
export class List6Component implements OnInit, OnDestroy {
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

    public fieldData: Object[] = [
        {
            id: 1,
            field: 'Full Name',
            fontIcon: 'e-icons e-user'
        },
        {
            id: 2,
            field: 'Email Address',
            fontIcon: 'sf-icon-mail-02'
        },
        {
            id: 3,
            field: 'Phone Number',
            fontIcon: 'sf-icon-phone-01'
        },
        {
            id: 4,
            field: 'Date of Birth',
            fontIcon: 'e-icons e-day'
        },
        {
            id: 5,
            field: 'Address',
            fontIcon: 'e-icons e-location'
        }
    ]

    @HostListener('window:resize', ['$event'])
    public onResize(event: UIEvent): void {
        const width = (event.target as Window).innerWidth;
        this.checkWindowSize(width);
    }

    public checkWindowSize(width: number): void {
        this.width = width < 1024 ? "width:100%" : "max-width:452px";
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'list-6' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
