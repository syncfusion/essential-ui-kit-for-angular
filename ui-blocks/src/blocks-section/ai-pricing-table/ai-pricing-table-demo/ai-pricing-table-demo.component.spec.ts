import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiPricingTableDemoComponent } from './ai-pricing-table-demo.component';

describe('AiPricingTableDemoComponent', () => {
  let component: AiPricingTableDemoComponent;
  let fixture: ComponentFixture<AiPricingTableDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiPricingTableDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiPricingTableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
