import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlockList, DataService } from '../../app/data.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'app-main-page',
    standalone: true,
    imports: [CommonModule, HeaderComponent, FooterComponent],
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit, AfterViewInit {
    public activeTabIndex: number = 0;
    public currentBlocks: BlockList[] = [];
    public tabs: { title: string }[] = [
        { title: 'Authentication' },
        { title: 'Layouts' },
        { title: 'Data Visualization' },
        { title: 'AI' },
        { title: 'E-commerce' },
        { title: 'Communication' }
    ];
    private blockList: BlockList[] = [];

    constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService) {
        this.activeTabIndex = this.dataService.getSelectedCategoryIndex();
    }

    public ngOnInit(): void {
        this.blockList = this.dataService.getBlockList();
        this.updateCurrentBlocks();
    }

    public ngAfterViewInit(): void {
        this.route.fragment.subscribe(fragment => {
            if (fragment) {
                const element = document.getElementById(fragment);
                if (element) {
                    element.scrollIntoView({ behavior: 'instant' });
                }
            }
        });
    }

    public navigateToDemo(url: string): void {
        this.router.navigate([`blocks/${url}`]);
    }

    public selectTab(index: number): void {
        this.activeTabIndex = index;
        this.dataService.setSelectedCategoryIndex(index);
        this.updateCurrentBlocks();
    }

    private updateCurrentBlocks(): void {
        const activeTab = this.tabs[this.activeTabIndex];
        if (activeTab) {
            const activeTabTitle: string = activeTab.title;
            this.currentBlocks = this.blockList.filter(block => block.category === activeTabTitle);
        } else {
            this.currentBlocks = [];
        }
    }
}