import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar5Component } from './navbar-5.component';

describe('Navbar5Component', () => {
  let component: Navbar5Component;
  let fixture: ComponentFixture<Navbar5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navbar5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
