import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanComparison1Component } from './plan-comparison-1.component';

describe('PlanComparison1Component', () => {
  let component: PlanComparison1Component;
  let fixture: ComponentFixture<PlanComparison1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanComparison1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanComparison1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
