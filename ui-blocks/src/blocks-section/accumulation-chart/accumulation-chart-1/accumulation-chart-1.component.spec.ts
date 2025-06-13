import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccumulationChart1Component } from './accumulation-chart-1.component';

describe('AccumulationChart1Component', () => {
  let component: AccumulationChart1Component;
  let fixture: ComponentFixture<AccumulationChart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccumulationChart1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccumulationChart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
