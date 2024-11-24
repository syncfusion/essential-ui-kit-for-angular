import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cards13Component } from './cards-13.component';

describe('Cards13Component', () => {
  let component: Cards13Component;
  let fixture: ComponentFixture<Cards13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cards13Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cards13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
