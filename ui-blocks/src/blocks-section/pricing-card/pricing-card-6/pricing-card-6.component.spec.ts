import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingCard6Component } from './pricing-card-6.component';

describe('PricingCard6Component', () => {
  let component: PricingCard6Component;
  let fixture: ComponentFixture<PricingCard6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingCard6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingCard6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
