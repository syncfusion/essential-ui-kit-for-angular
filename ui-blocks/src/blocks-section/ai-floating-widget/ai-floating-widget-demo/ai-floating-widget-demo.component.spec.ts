import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiFloatingWidgetDemoComponent } from './ai-floating-widget-demo.component';

describe('AiFloatingWidgetDemoComponent', () => {
  let component: AiFloatingWidgetDemoComponent;
  let fixture: ComponentFixture<AiFloatingWidgetDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiFloatingWidgetDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiFloatingWidgetDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
