import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modals5Component } from './modals-5.component';

describe('Modals5Component', () => {
  let component: Modals5Component;
  let fixture: ComponentFixture<Modals5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modals5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modals5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
