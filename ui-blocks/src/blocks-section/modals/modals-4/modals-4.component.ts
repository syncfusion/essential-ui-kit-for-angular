import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule, DialogComponent } from '@syncfusion/ej2-angular-popups';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { ButtonModule, CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
    selector: 'app-modals-4',
    standalone: true,
    imports: [CommonModule, DialogModule, ListViewModule, TextBoxModule, ButtonModule, CheckBoxModule, DropDownButtonModule],
    templateUrl: './modals-4.component.html',
    styleUrl: './modals-4.component.css'
})
export class Modals4Component implements OnInit, OnDestroy {
    @ViewChild('dialog') public dialog!: DialogComponent;
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public dataSource: Object[] = [
        { id: 1, name: 'Jane Smith', email: 'jane.smith@example.com', status: 'Active', role: 'Admin' },
        { id: 2, name: 'Mark Johnson', email: 'mark.johnson@example.com', status: 'Active', role: 'Editor' },
        { id: 3, name: 'Emily White', email: 'emily.white@example.com', status: 'Pending', role: 'Viewer' },
        { id: 4, name: 'Tom Harris', email: 'tom.harris@example.com', status: 'Active', role: 'Editor' },
        { id: 5, name: 'Lisa Green', email: 'lisa.green@example.com', status: 'Active', role: 'Viewer' }
    ];

    constructor() { }

    public ngOnInit(): void {
        /* SB Code - Start */
        window.addEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    public ngAfterViewInit(): void {
        setTimeout(() => {
            this.checkWindowSize();
        }, 200);
    }

    public ngOnDestroy(): void {
        /* SB Code - Start */
        window.removeEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    @HostListener('window:resize')
    public onResize(): void {
        this.checkWindowSize();
    }

    public checkWindowSize(): void {
        this.dialog.show(window.innerWidth <= 640);
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'modals-4' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
