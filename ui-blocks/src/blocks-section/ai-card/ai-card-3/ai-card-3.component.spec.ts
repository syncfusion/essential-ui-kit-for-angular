import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiCard3Component } from './ai-card-3.component';

describe('AiCard3Component', () => {
  let component: AiCard3Component;
  let fixture: ComponentFixture<AiCard3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiCard3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiCard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
