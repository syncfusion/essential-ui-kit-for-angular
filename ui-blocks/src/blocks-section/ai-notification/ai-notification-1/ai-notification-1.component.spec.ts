import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiNotification1Component } from './ai-notification-1.component';

describe('AiNotification1Component', () => {
  let component: AiNotification1Component;
  let fixture: ComponentFixture<AiNotification1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiNotification1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiNotification1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
