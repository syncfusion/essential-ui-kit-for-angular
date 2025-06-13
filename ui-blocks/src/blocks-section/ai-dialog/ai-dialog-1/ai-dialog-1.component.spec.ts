import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiDialog1Component } from './ai-dialog-1.component';

describe('AiDialog1Component', () => {
  let component: AiDialog1Component;
  let fixture: ComponentFixture<AiDialog1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiDialog1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiDialog1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
