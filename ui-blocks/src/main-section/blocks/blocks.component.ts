import { Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Block, BlockList, DataService } from '../../app/data.service';
import { DemoComponent } from '../demo/demo.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'app-blocks',
    standalone: true,
    imports: [DemoComponent, HeaderComponent, FooterComponent],
    templateUrl: './blocks.component.html',
    styleUrl: './blocks.component.css'
})
export class BlocksComponent implements OnChanges {
    @Input() public blockName!: string;
    public currentBlock: BlockList = {} as BlockList;
    public samplesList: Block[] = [];

    constructor(private router: Router, private dataService: DataService) { }

    public ngOnChanges(): void {
        this.getBlockDetails();
    }

    public navigateToMainPage(): void {
        this.router.navigate(['blocks'], { fragment: 'block-tab' });
    }

    private getBlockDetails(): void {
        const blockList: BlockList[] = this.dataService.getBlockList();
        this.currentBlock = blockList.find(block => block.url === this.blockName) ?? {} as BlockList;
        this.samplesList = this.currentBlock.subBlockList ?? [];
    }
}