import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calendar5Component } from './calendar-5.component';

describe('Calendar5Component', () => {
  let component: Calendar5Component;
  let fixture: ComponentFixture<Calendar5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calendar5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calendar5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
