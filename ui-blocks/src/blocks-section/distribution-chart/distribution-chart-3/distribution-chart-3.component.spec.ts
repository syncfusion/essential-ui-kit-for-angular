import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionChart3Component } from './distribution-chart-3.component';

describe('DistributionChart3Component', () => {
  let component: DistributionChart3Component;
  let fixture: ComponentFixture<DistributionChart3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributionChart3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistributionChart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
