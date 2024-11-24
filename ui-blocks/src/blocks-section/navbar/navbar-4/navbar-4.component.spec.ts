import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar4Component } from './navbar-4.component';

describe('Navbar4Component', () => {
  let component: Navbar4Component;
  let fixture: ComponentFixture<Navbar4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navbar4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
