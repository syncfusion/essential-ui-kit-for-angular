import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiPromptCard4Component } from './ai-prompt-card-4.component';

describe('AiPromptCard4Component', () => {
  let component: AiPromptCard4Component;
  let fixture: ComponentFixture<AiPromptCard4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiPromptCard4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiPromptCard4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
