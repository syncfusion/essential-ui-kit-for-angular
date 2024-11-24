import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPassword2Component } from './forgot-password-2.component';

describe('ForgotPassword2Component', () => {
  let component: ForgotPassword2Component;
  let fixture: ComponentFixture<ForgotPassword2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotPassword2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPassword2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
