import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiPromptCard3Component } from './ai-prompt-card-3.component';

describe('AiPromptCard3Component', () => {
  let component: AiPromptCard3Component;
  let fixture: ComponentFixture<AiPromptCard3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiPromptCard3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiPromptCard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
