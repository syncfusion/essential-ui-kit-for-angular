import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingCard2Component } from './pricing-card-2.component';

describe('PricingCard2Component', () => {
  let component: PricingCard2Component;
  let fixture: ComponentFixture<PricingCard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingCard2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
