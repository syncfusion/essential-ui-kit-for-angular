import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiPromptCard1Component } from './ai-prompt-card-1.component';

describe('AiPromptCard1Component', () => {
  let component: AiPromptCard1Component;
  let fixture: ComponentFixture<AiPromptCard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiPromptCard1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiPromptCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
