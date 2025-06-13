import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiNotificationDemoComponent } from './ai-notification-demo.component';

describe('AiNotificationDemoComponent', () => {
  let component: AiNotificationDemoComponent;
  let fixture: ComponentFixture<AiNotificationDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiNotificationDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiNotificationDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
