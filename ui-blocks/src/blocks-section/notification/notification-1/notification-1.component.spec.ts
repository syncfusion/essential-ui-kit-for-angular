import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notification1Component } from './notification-1.component';

describe('Notification1Component', () => {
  let component: Notification1Component;
  let fixture: ComponentFixture<Notification1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Notification1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Notification1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
