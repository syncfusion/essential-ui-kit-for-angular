import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiChatDemoComponent } from './ai-chat-demo.component';

describe('AiChatDemoComponent', () => {
  let component: AiChatDemoComponent;
  let fixture: ComponentFixture<AiChatDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiChatDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiChatDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
