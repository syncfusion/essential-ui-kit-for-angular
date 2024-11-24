import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signout3Component } from './signout-3.component';

describe('Signout3Component', () => {
  let component: Signout3Component;
  let fixture: ComponentFixture<Signout3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signout3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Signout3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
