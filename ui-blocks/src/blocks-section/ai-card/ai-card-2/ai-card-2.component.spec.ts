import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiCard2Component } from './ai-card-2.component';

describe('AiCard2Component', () => {
  let component: AiCard2Component;
  let fixture: ComponentFixture<AiCard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiCard2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
