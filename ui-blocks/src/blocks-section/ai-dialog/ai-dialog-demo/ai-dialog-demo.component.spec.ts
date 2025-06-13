import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiDialogDemoComponent } from './ai-dialog-demo.component';

describe('AiDialogDemoComponent', () => {
  let component: AiDialogDemoComponent;
  let fixture: ComponentFixture<AiDialogDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiDialogDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiDialogDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
