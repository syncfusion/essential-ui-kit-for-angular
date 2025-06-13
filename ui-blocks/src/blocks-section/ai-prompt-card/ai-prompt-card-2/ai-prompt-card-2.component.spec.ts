import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiPromptCard2Component } from './ai-prompt-card-2.component';

describe('AiPromptCard2Component', () => {
  let component: AiPromptCard2Component;
  let fixture: ComponentFixture<AiPromptCard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiPromptCard2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiPromptCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
