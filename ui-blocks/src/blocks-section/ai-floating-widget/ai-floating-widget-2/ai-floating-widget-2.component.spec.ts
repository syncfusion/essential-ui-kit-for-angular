import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiFloatingWidget2Component } from './ai-floating-widget-2.component';

describe('AiFloatingWidget2Component', () => {
  let component: AiFloatingWidget2Component;
  let fixture: ComponentFixture<AiFloatingWidget2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiFloatingWidget2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiFloatingWidget2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
