import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingCard3Component } from './pricing-card-3.component';

describe('PricingCard3Component', () => {
  let component: PricingCard3Component;
  let fixture: ComponentFixture<PricingCard3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingCard3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingCard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
