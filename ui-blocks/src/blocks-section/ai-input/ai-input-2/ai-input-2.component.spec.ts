import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiInput2Component } from './ai-input-2.component';

describe('AiInput2Component', () => {
  let component: AiInput2Component;
  let fixture: ComponentFixture<AiInput2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiInput2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiInput2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
