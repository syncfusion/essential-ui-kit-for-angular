import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiCard4Component } from './ai-card-4.component';

describe('AiCard4Component', () => {
  let component: AiCard4Component;
  let fixture: ComponentFixture<AiCard4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiCard4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiCard4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
