import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionChart4Component } from './distribution-chart-4.component';

describe('DistributionChart4Component', () => {
  let component: DistributionChart4Component;
  let fixture: ComponentFixture<DistributionChart4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributionChart4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistributionChart4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
