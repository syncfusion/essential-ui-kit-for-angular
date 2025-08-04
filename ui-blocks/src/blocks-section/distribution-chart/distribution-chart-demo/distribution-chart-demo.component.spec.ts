import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionChartDemoComponent } from './distribution-chart-demo.component';

describe('DistributionChartDemoComponent', () => {
  let component: DistributionChartDemoComponent;
  let fixture: ComponentFixture<DistributionChartDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributionChartDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistributionChartDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
