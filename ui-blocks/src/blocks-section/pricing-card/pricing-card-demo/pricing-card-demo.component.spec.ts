import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingCardDemoComponent } from './pricing-card-demo.component';

describe('PricingCardDemoComponent', () => {
  let component: PricingCardDemoComponent;
  let fixture: ComponentFixture<PricingCardDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingCardDemoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PricingCardDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
