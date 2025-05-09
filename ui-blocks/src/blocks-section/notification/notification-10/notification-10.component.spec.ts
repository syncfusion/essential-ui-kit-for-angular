import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notification10Component } from './notification-10.component';

describe('Notification10Component', () => {
  let component: Notification10Component;
  let fixture: ComponentFixture<Notification10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Notification10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Notification10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
