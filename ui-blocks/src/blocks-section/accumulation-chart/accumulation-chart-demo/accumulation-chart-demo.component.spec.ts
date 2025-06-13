import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccumulationChartDemoComponent } from './accumulation-chart-demo.component';

describe('AccumulationChartDemoComponent', () => {
  let component: AccumulationChartDemoComponent;
  let fixture: ComponentFixture<AccumulationChartDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccumulationChartDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccumulationChartDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
