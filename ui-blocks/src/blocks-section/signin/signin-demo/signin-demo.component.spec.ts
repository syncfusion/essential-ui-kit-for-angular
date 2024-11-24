import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninDemoComponent } from './signin-demo.component';

describe('SigninDemoComponent', () => {
  let component: SigninDemoComponent;
  let fixture: ComponentFixture<SigninDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigninDemoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SigninDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
