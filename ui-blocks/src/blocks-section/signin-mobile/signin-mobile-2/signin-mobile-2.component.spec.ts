import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninMobile2Component } from './signin-mobile-2.component';

describe('SigninMobile2Component', () => {
  let component: SigninMobile2Component;
  let fixture: ComponentFixture<SigninMobile2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigninMobile2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninMobile2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
