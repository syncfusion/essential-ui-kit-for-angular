import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionChart1Component } from './distribution-chart-1.component';

describe('DistributionChart1Component', () => {
  let component: DistributionChart1Component;
  let fixture: ComponentFixture<DistributionChart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributionChart1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistributionChart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
