import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiDialog3Component } from './ai-dialog-3.component';

describe('AiDialog3Component', () => {
  let component: AiDialog3Component;
  let fixture: ComponentFixture<AiDialog3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiDialog3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiDialog3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
