import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule, DialogComponent } from '@syncfusion/ej2-angular-popups';
import { QueryBuilderModule, QueryBuilderComponent } from '@syncfusion/ej2-angular-querybuilder';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-filter-panel-2',
  standalone: true,
  imports: [CommonModule, DialogModule, QueryBuilderModule, ButtonModule],
  templateUrl: './filter-panel-2.component.html',
  styleUrl: './filter-panel-2.component.css' 
})
export class FilterPanel2Component implements OnInit, OnDestroy {
    @ViewChild('dialog') public dialog?: DialogComponent;
    @ViewChild('queryBuilder1') queryBuilder1!: QueryBuilderComponent;
    @ViewChild('queryBuilder2') queryBuilder2!: QueryBuilderComponent;
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public recordLength!:number;
    public recordData!:number;
    public filterOperators: any = [
        { value: 'in', key: 'In' },
        { value: 'notin', key: 'Not In' },
        { value: 'is', key: 'Is' },
        { value: 'isnot', key: 'Is not' }
    ];
   
    public inOperators: string[] = ['in', 'notin'];

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

    public onRuleUpdate(): void { 
        this.recordLength = this.queryBuilder1.getRules()?.rules?.length ?? 1; 
    }

    public onRuleAdd(): void { 
        this.recordData = this.queryBuilder2.getRules()?.rules?.length ?? 1; 
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'filter-panel-2' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
