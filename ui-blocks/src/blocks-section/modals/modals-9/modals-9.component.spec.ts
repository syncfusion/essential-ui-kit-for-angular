import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modals9Component } from './modals-9.component';

describe('Modals9Component', () => {
  let component: Modals9Component;
  let fixture: ComponentFixture<Modals9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modals9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modals9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
