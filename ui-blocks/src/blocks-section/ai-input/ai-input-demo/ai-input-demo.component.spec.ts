import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiInputDemoComponent } from './ai-input-demo.component';

describe('AiInputDemoComponent', () => {
  let component: AiInputDemoComponent;
  let fixture: ComponentFixture<AiInputDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiInputDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiInputDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
