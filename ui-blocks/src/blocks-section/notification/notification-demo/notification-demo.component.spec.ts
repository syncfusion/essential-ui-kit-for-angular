import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationDemoComponent } from './notification-demo.component';

describe('NotificationDemoComponent', () => {
  let component: NotificationDemoComponent;
  let fixture: ComponentFixture<NotificationDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
