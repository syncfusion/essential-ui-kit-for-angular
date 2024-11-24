import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninOtp2Component } from './signin-otp-2.component';

describe('SigninOtp2Component', () => {
  let component: SigninOtp2Component;
  let fixture: ComponentFixture<SigninOtp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigninOtp2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninOtp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
