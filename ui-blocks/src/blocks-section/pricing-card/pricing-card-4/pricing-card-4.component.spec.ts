import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingCard4Component } from './pricing-card-4.component';

describe('PricingCard4Component', () => {
  let component: PricingCard4Component;
  let fixture: ComponentFixture<PricingCard4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingCard4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingCard4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
