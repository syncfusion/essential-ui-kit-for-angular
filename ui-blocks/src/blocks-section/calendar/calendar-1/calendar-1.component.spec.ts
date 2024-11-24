import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calendar1Component } from './calendar-1.component';

describe('Calendar1Component', () => {
  let component: Calendar1Component;
  let fixture: ComponentFixture<Calendar1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calendar1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calendar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
