import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chat2Component } from './chat-2.component';

describe('Chat2Component', () => {
  let component: Chat2Component;
  let fixture: ComponentFixture<Chat2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chat2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chat2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
