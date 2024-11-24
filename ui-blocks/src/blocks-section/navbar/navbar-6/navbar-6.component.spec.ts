import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar6Component } from './navbar-6.component';

describe('Navbar6Component', () => {
  let component: Navbar6Component;
  let fixture: ComponentFixture<Navbar6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navbar6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
