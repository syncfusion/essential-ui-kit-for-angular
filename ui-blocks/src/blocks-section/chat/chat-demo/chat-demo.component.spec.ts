import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDemoComponent } from './chat-demo.component';

describe('ChatDemoComponent', () => {
  let component: ChatDemoComponent;
  let fixture: ComponentFixture<ChatDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
