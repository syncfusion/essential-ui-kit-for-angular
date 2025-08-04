import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiFloatingWidget3Component } from './ai-floating-widget-3.component';

describe('AiFloatingWidget3Component', () => {
  let component: AiFloatingWidget3Component;
  let fixture: ComponentFixture<AiFloatingWidget3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiFloatingWidget3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiFloatingWidget3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
