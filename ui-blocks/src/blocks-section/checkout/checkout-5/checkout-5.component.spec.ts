import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Checkout5Component } from './checkout-5.component';

describe('Checkout5Component', () => {
  let component: Checkout5Component;
  let fixture: ComponentFixture<Checkout5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Checkout5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Checkout5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
