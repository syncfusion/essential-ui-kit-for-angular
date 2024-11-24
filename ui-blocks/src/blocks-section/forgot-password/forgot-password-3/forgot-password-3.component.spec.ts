import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPassword3Component } from './forgot-password-3.component';

describe('ForgotPassword3Component', () => {
  let component: ForgotPassword3Component;
  let fixture: ComponentFixture<ForgotPassword3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotPassword3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPassword3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
