import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninMobile3Component } from './signin-mobile-3.component';

describe('SigninMobile3Component', () => {
  let component: SigninMobile3Component;
  let fixture: ComponentFixture<SigninMobile3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigninMobile3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninMobile3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
