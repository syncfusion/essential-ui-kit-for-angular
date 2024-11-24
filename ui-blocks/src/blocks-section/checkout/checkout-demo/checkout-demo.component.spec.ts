import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutDemoComponent } from './checkout-demo.component';

describe('CheckoutDemoComponent', () => {
  let component: CheckoutDemoComponent;
  let fixture: ComponentFixture<CheckoutDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
