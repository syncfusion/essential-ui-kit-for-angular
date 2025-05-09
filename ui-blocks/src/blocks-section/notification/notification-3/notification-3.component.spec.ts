import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notification3Component } from './notification-3.component';

describe('Notification3Component', () => {
  let component: Notification3Component;
  let fixture: ComponentFixture<Notification3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Notification3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Notification3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
