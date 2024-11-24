import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signin3Component } from './signin-3.component';

describe('Signin3Component', () => {
  let component: Signin3Component;
  let fixture: ComponentFixture<Signin3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signin3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Signin3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
