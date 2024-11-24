import { Component, OnInit, OnDestroy } from '@angular/core';
import { GridModule, GroupService } from '@syncfusion/ej2-angular-grids';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { CommonModule } from '@angular/common';
import { ProgressBarModule } from '@syncfusion/ej2-angular-progressbar';

@Component({
    selector: 'app-grid-8',
    standalone: true,
    imports: [CommonModule, GridModule, ButtonModule, ProgressBarModule],
    providers: [GroupService],
    templateUrl: './grid-8.component.html'
})
export class Grid8Component implements OnInit, OnDestroy {
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
            name: 'Lisa Martinez',
            totalSales: 220000,
            trend: 'down',
            dealsClosed: 11,
            target: 3000000,
            progressBar: { id: 'progressId-1', value: 22.3 },
            avgDealSize: 20000,
            winPercent: "Low(<70%)",
            winRate: 62,
            callsMade: 100,
            meetings: 20,
            pipelineValue: 400000,
            performance: 60
        },
        {
            id: 2,
            name: 'Robert Johnson',
            totalSales: 240000,
            trend: 'down',
            dealsClosed: 12,
            target: 3000000,
            progressBar: { id: 'progressId-2', value: 80.0 },
            avgDealSize: 20000,
            winPercent: "Low(<70%)",
            winRate: 65,
            callsMade: 110,
            meetings: 22,
            pipelineValue: 450000,
            performance: 65
        },
        {
            id: 3,
            name: 'William Turner',
            totalSales: 250000,
            trend: 'down',
            dealsClosed: 13,
            target: 3000000,
            progressBar: { id: 'progressId-3', value: 50.1 },
            avgDealSize: 19230,
            winPercent: "Low(<70%)",
            winRate: 68,
            callsMade: 115,
            meetings: 24,
            pipelineValue: 470000,
            performance: 69
        },
        {
            id: 4,
            name: 'Jennifer Lee',
            totalSales: 290000,
            trend: 'down',
            dealsClosed: 14,
            target: 3000000,
            progressBar: { id: 'progressId-4', value: 89.0 },
            avgDealSize: 19285,
            winPercent: "Medium(70-79%)",
            winRate: 72,
            callsMade: 125,
            meetings: 26,
            pipelineValue: 500000,
            performance: 74
        },
        {
            id: 5,
            name: 'Sarah Wilson',
            totalSales: 290000,
            trend: 'up',
            dealsClosed: 15,
            target: 3000000,
            progressBar: { id: 'progressId-5', value: 100 },
            avgDealSize: 18666,
            winPercent: "Medium(70-79%)",
            winRate: 75,
            callsMade: 130,
            meetings: 28,
            pipelineValue: 520000,
            performance: 78
        },
        {
            id: 6,
            name: 'David Thompson',
            totalSales: 290000,
            trend: 'down',
            dealsClosed: 16,
            target: 3000000,
            progressBar: { id: 'progressId-6', value: 23.3 },
            avgDealSize: 18125,
            winPercent: "Medium(70-79%)",
            winRate: 78,
            callsMade: 135,
            meetings: 30,
            pipelineValue: 550000,
            performance: 82
        },
        {
            id: 7,
            name: 'Michael Davis',
            totalSales: 310000,
            trend: 'down',
            dealsClosed: 17,
            target: 3000000,
            progressBar: { id: 'progressId-7', value: 50.1 },
            avgDealSize: 18235,
            winPercent: "High(80%+)",
            winRate: 82,
            callsMade: 140,
            meetings: 32,
            pipelineValue: 580000,
            performance: 88
        },
        {
            id: 8,
            name: 'John Smith',
            totalSales: 320000,
            trend: 'down',
            dealsClosed: 18,
            target: 3000000,
            progressBar: { id: 'progressId-8', value: 23.3 },
            avgDealSize: 17777,
            winPercent: "High(80%+)",
            winRate: 85,
            callsMade: 150,
            meetings: 35,
            pipelineValue: 600000,
            performance: 92
        },
        {
            id: 9,
            name: 'Emily Brown',
            totalSales: 350000,
            trend: 'up',
            dealsClosed: 19,
            target: 3000000,
            progressBar: { id: 'progressId-9', value: 100 },
            avgDealSize: 17500,
            winPercent: "High(80%+)",
            winRate: 88,
            callsMade: 180,
            meetings: 40,
            pipelineValue: 700000,
            performance: 99
        }
    ];

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'grid-8' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
