import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninOtp3Component } from './signin-otp-3.component';

describe('SigninOtp3Component', () => {
  let component: SigninOtp3Component;
  let fixture: ComponentFixture<SigninOtp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigninOtp3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninOtp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
