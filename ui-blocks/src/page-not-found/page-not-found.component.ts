import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-page-not-found',
    standalone: true,
    templateUrl: './page-not-found.component.html',
    styleUrl: './page-not-found.component.css',
})
export class PageNotFoundComponent {
    constructor(private router: Router) { }

    public navigateToHome() {
        this.router.navigate(['blocks']);
    }
}