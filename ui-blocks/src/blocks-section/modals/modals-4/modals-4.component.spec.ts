import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modals4Component } from './modals-4.component';

describe('Modals4Component', () => {
  let component: Modals4Component;
  let fixture: ComponentFixture<Modals4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modals4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modals4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
