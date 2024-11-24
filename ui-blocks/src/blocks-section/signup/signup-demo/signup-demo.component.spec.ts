import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupDemoComponent } from './signup-demo.component';

describe('SignupDemoComponent', () => {
  let component: SignupDemoComponent;
  let fixture: ComponentFixture<SignupDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupDemoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SignupDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
