import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignoutDemoComponent } from './signout-demo.component';

describe('SignoutDemoComponent', () => {
  let component: SignoutDemoComponent;
  let fixture: ComponentFixture<SignoutDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignoutDemoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SignoutDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
