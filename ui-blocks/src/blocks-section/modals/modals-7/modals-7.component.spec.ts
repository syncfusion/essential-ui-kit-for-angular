import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modals7Component } from './modals-7.component';

describe('Modals7Component', () => {
  let component: Modals7Component;
  let fixture: ComponentFixture<Modals7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modals7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modals7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
