import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiChat2Component } from './ai-chat-2.component';

describe('AiChat2Component', () => {
  let component: AiChat2Component;
  let fixture: ComponentFixture<AiChat2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiChat2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiChat2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
