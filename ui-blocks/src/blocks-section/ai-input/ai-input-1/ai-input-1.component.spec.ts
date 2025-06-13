import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiInput1Component } from './ai-input-1.component';

describe('AiInput1Component', () => {
  let component: AiInput1Component;
  let fixture: ComponentFixture<AiInput1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiInput1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiInput1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
