import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPassword1Component } from './forgot-password-1.component';

describe('ForgotPassword1Component', () => {
  let component: ForgotPassword1Component;
  let fixture: ComponentFixture<ForgotPassword1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotPassword1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPassword1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
