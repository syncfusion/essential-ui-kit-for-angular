import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calendar6Component } from './calendar-6.component';

describe('Calendar6Component', () => {
  let component: Calendar6Component;
  let fixture: ComponentFixture<Calendar6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calendar6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calendar6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
