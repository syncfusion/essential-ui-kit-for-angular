import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingCard5Component } from './pricing-card-5.component';

describe('PricingCard5Component', () => {
  let component: PricingCard5Component;
  let fixture: ComponentFixture<PricingCard5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingCard5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingCard5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
