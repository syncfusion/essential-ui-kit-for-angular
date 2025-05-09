import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notification2Component } from './notification-2.component';

describe('Notification2Component', () => {
  let component: Notification2Component;
  let fixture: ComponentFixture<Notification2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Notification2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Notification2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
