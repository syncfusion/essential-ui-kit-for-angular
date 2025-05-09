import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modals10Component } from './modals-10.component';

describe('Modals10Component', () => {
  let component: Modals10Component;
  let fixture: ComponentFixture<Modals10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modals10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modals10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
