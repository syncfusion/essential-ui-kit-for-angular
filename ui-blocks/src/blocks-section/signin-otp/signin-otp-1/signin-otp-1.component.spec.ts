import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninOtp1Component } from './signin-otp-1.component';

describe('SigninOtp1Component', () => {
  let component: SigninOtp1Component;
  let fixture: ComponentFixture<SigninOtp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigninOtp1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninOtp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
