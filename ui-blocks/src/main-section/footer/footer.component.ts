import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
    public currentYear: number | undefined;

    public ngOnInit(): void {
        this.currentYear = new Date().getFullYear();
    }
}
