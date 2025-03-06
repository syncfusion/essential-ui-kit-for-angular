import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modals6Component } from './modals-6.component';

describe('Modals6Component', () => {
  let component: Modals6Component;
  let fixture: ComponentFixture<Modals6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modals6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modals6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
