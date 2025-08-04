import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiFloatingWidget1Component } from './ai-floating-widget-1.component';

describe('AiFloatingWidget1Component', () => {
  let component: AiFloatingWidget1Component;
  let fixture: ComponentFixture<AiFloatingWidget1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiFloatingWidget1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiFloatingWidget1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
