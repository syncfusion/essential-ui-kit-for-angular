import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleChartDemoComponent } from './bubble-chart-demo.component';

describe('BubbleChartDemoComponent', () => {
  let component: BubbleChartDemoComponent;
  let fixture: ComponentFixture<BubbleChartDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BubbleChartDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BubbleChartDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
