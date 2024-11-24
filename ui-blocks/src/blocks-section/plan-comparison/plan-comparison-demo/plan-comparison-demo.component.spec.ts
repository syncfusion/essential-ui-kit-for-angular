import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanComparisonDemoComponent } from './plan-comparison-demo.component';

describe('PlanComparisonDemoComponent', () => {
  let component: PlanComparisonDemoComponent;
  let fixture: ComponentFixture<PlanComparisonDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanComparisonDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanComparisonDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
