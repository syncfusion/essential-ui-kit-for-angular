import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingCard1Component } from './pricing-card-1.component';

describe('PricingCard1Component', () => {
  let component: PricingCard1Component;
  let fixture: ComponentFixture<PricingCard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingCard1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
