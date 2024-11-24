import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninMobile1Component } from './signin-mobile-1.component';

describe('SigninMobile1Component', () => {
  let component: SigninMobile1Component;
  let fixture: ComponentFixture<SigninMobile1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigninMobile1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninMobile1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
