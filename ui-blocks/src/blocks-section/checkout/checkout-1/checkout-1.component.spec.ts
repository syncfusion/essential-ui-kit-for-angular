import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Checkout1Component } from './checkout-1.component';

describe('Checkout1Component', () => {
  let component: Checkout1Component;
  let fixture: ComponentFixture<Checkout1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Checkout1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Checkout1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
