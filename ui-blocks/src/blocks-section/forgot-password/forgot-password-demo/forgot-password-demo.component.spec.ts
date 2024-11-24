import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordDemoComponent } from './forgot-password-demo.component';

describe('ForgotPasswordDemoComponent', () => {
  let component: ForgotPasswordDemoComponent;
  let fixture: ComponentFixture<ForgotPasswordDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotPasswordDemoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
