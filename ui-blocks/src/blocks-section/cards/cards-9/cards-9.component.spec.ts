import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cards9Component } from './cards-9.component';

describe('Cards9Component', () => {
  let component: Cards9Component;
  let fixture: ComponentFixture<Cards9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cards9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cards9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
