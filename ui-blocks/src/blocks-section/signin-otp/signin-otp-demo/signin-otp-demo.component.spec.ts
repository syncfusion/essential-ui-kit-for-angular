import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninOtpDemoComponent } from './signin-otp-demo.component';

describe('SigninOtpDemoComponent', () => {
  let component: SigninOtpDemoComponent;
  let fixture: ComponentFixture<SigninOtpDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigninOtpDemoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SigninOtpDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
