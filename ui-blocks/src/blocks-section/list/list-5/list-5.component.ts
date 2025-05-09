import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';

@Component({
    selector: 'app-list-5',
    standalone: true,
    imports: [ListViewModule],
    templateUrl: './list-5.component.html'
})
export class List5Component implements OnInit, OnDestroy {
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

    public countries: Object[] = [
        {
            id: '1',
            country: 'Afghanistan',
            number: '+93',
            badge: 'AF',
            pic: 'afghanistan.png'
        },
        {
            id: '2',
            country: 'Albania',
            number: '+355',
            badge: 'AL',
            pic: 'albania.png'
        },
        {
            id: '3',
            country: 'Algeria',
            number: '+213',
            badge: 'DZ',
            pic: 'algeria.png'
        },
        {
            id: '4',
            country: 'Andorra',
            number: '+376',
            badge: 'AD',
            pic: 'andorra.png'
        },
        {
            id: '5',
            country: 'Angola',
            number: '+244',
            badge: 'AO',
            pic: 'angola.png'
        },
        {
            id: '6',
            country: 'Argentina',
            number: '+54',
            badge: 'AR',
            pic: 'argentina.png'
        },
        {
            id: '7',
            country: 'Armenia',
            number: '+374',
            badge: 'AM',
            pic: 'armenia.png'
        },
        {
            id: '8',
            country: 'Australia',
            number: '+61',
            badge: 'AU',
            pic: 'australia.png'
        }
    ];

    @HostListener('window:resize', ['$event'])
    public onResize(event: UIEvent): void {
        const width = (event.target as Window).innerWidth;
        this.checkWindowSize(width);
    }

    public checkWindowSize(width: number): void {
        this.width = width < 1024 ? "width:100%" : "max-width:448px";
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'list-5' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
