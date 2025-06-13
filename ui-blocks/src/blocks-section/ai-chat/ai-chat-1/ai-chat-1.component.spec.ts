import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiChat1Component } from './ai-chat-1.component';

describe('AiChat1Component', () => {
  let component: AiChat1Component;
  let fixture: ComponentFixture<AiChat1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiChat1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiChat1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
