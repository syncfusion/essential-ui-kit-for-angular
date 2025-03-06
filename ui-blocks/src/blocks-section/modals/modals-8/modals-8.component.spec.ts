import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modals8Component } from './modals-8.component';

describe('Modals8Component', () => {
  let component: Modals8Component;
  let fixture: ComponentFixture<Modals8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modals8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modals8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
