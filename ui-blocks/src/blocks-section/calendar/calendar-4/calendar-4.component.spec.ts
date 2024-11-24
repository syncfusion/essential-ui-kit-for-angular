import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calendar4Component } from './calendar-4.component';

describe('Calendar4Component', () => {
  let component: Calendar4Component;
  let fixture: ComponentFixture<Calendar4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calendar4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calendar4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
