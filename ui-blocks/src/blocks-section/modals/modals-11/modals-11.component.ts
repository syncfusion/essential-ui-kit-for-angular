import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { DialogModule, DialogComponent, OpenEventArgs } from '@syncfusion/ej2-angular-popups';
import { RichTextEditorAllModule, RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-modals-11',
    standalone: true,
    imports: [DialogModule, RichTextEditorAllModule, ButtonModule],
    templateUrl: './modals-11.component.html'
})
export class Modals11Component implements OnInit, OnDestroy {
    @ViewChild('dialog') public dialog!: DialogComponent;
    @ViewChild('rte') public rte!: RichTextEditorComponent;
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public rteHeight: string = '325px';
    public isMobile: boolean = false;

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
    public handleResize(): void {
        this.checkWindowSize();
    }

    public checkWindowSize(): void {
        this.isMobile = window.innerWidth <= 640;
        this.rteHeight = this.isMobile ? '100%' : '325px';
        this.dialog.refresh();
        this.dialog.show(this.isMobile);
    }

    public dialogOpen(args: OpenEventArgs): void {
        args.preventFocus = true;
        setTimeout(() => {
            this.rte.refresh();
        }, 100);
    }

    /* SB Code - Start */
    private refreshDialog(timeout: number): void {
        setTimeout(() => {
            this.dialog.show(this.isMobile);
        }, timeout);
    }

    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'modals-11' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                    this.refreshDialog(600);
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
