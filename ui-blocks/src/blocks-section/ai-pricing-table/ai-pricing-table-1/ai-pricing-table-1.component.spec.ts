import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiPricingTable1Component } from './ai-pricing-table-1.component';

describe('AiPricingTable1Component', () => {
  let component: AiPricingTable1Component;
  let fixture: ComponentFixture<AiPricingTable1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiPricingTable1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiPricingTable1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
