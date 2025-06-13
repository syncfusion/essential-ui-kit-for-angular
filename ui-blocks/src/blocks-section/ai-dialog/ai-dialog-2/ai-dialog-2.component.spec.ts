import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiDialog2Component } from './ai-dialog-2.component';

describe('AiDialog2Component', () => {
  let component: AiDialog2Component;
  let fixture: ComponentFixture<AiDialog2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiDialog2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiDialog2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
