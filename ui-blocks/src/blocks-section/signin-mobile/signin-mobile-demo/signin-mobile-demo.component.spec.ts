import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninMobileDemoComponent } from './signin-mobile-demo.component';

describe('SigninMobileDemoComponent', () => {
  let component: SigninMobileDemoComponent;
  let fixture: ComponentFixture<SigninMobileDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigninMobileDemoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SigninMobileDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
