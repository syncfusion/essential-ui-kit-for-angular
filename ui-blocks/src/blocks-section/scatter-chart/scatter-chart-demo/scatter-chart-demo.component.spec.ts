import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterChartDemoComponent } from './scatter-chart-demo.component';

describe('ScatterChartDemoComponent', () => {
  let component: ScatterChartDemoComponent;
  let fixture: ComponentFixture<ScatterChartDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScatterChartDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScatterChartDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
