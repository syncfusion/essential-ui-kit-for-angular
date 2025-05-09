import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notification5Component } from './notification-5.component';

describe('Notification5Component', () => {
  let component: Notification5Component;
  let fixture: ComponentFixture<Notification5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Notification5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Notification5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
