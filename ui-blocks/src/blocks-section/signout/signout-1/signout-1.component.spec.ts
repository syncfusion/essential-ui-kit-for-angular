import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signout1Component } from './signout-1.component';

describe('Signout1Component', () => {
  let component: Signout1Component;
  let fixture: ComponentFixture<Signout1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signout1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Signout1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
