import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notification8Component } from './notification-8.component';

describe('Notification8Component', () => {
  let component: Notification8Component;
  let fixture: ComponentFixture<Notification8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Notification8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Notification8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
