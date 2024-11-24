import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calendar3Component } from './calendar-3.component';

describe('Calendar3Component', () => {
  let component: Calendar3Component;
  let fixture: ComponentFixture<Calendar3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calendar3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calendar3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
