import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Checkout4Component } from './checkout-4.component';

describe('Checkout4Component', () => {
  let component: Checkout4Component;
  let fixture: ComponentFixture<Checkout4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Checkout4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Checkout4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
