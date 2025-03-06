import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header9Component } from './header-9.component';

describe('Header9Component', () => {
  let component: Header9Component;
  let fixture: ComponentFixture<Header9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
