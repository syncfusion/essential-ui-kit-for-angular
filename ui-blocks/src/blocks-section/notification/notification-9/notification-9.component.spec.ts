import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notification9Component } from './notification-9.component';

describe('Notification9Component', () => {
  let component: Notification9Component;
  let fixture: ComponentFixture<Notification9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Notification9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Notification9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
