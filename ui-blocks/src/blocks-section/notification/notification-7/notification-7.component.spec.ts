import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notification7Component } from './notification-7.component';

describe('Notification7Component', () => {
  let component: Notification7Component;
  let fixture: ComponentFixture<Notification7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Notification7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Notification7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
