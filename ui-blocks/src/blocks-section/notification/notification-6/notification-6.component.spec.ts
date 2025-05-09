import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notification6Component } from './notification-6.component';

describe('Notification6Component', () => {
  let component: Notification6Component;
  let fixture: ComponentFixture<Notification6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Notification6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Notification6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
