import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modals3Component } from './modals-3.component';

describe('Modals3Component', () => {
  let component: Modals3Component;
  let fixture: ComponentFixture<Modals3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modals3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modals3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
