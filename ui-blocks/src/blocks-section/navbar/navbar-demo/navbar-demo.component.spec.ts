import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDemoComponent } from './navbar-demo.component';

describe('NavbarDemoComponent', () => {
  let component: NavbarDemoComponent;
  let fixture: ComponentFixture<NavbarDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
