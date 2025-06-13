import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiPromptCardDemoComponent } from './ai-prompt-card-demo.component';

describe('AiPromptCardDemoComponent', () => {
  let component: AiPromptCardDemoComponent;
  let fixture: ComponentFixture<AiPromptCardDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiPromptCardDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiPromptCardDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
