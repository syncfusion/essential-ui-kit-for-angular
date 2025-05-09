import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notification4Component } from './notification-4.component';

describe('Notification4Component', () => {
  let component: Notification4Component;
  let fixture: ComponentFixture<Notification4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Notification4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Notification4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
