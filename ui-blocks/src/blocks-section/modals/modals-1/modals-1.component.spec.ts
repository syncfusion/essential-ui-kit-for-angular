import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modals1Component } from './modals-1.component';

describe('Modals1Component', () => {
  let component: Modals1Component;
  let fixture: ComponentFixture<Modals1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modals1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modals1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
