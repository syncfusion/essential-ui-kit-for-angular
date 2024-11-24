import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanComparison2Component } from './plan-comparison-2.component';

describe('PlanComparison2Component', () => {
  let component: PlanComparison2Component;
  let fixture: ComponentFixture<PlanComparison2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanComparison2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanComparison2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
