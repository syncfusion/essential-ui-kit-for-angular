import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionChart2Component } from './distribution-chart-2.component';

describe('DistributionChart2Component', () => {
  let component: DistributionChart2Component;
  let fixture: ComponentFixture<DistributionChart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributionChart2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistributionChart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
