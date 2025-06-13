import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccumulationChart2Component } from './accumulation-chart-2.component';

describe('AccumulationChart2Component', () => {
  let component: AccumulationChart2Component;
  let fixture: ComponentFixture<AccumulationChart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccumulationChart2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccumulationChart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
