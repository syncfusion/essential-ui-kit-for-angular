import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signout2Component } from './signout-2.component';

describe('Signout2Component', () => {
  let component: Signout2Component;
  let fixture: ComponentFixture<Signout2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signout2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Signout2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
