import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modals11Component } from './modals-11.component';

describe('Modals11Component', () => {
  let component: Modals11Component;
  let fixture: ComponentFixture<Modals11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modals11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modals11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
