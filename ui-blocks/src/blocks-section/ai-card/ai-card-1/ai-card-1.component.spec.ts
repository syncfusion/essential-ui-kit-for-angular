import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiCard1Component } from './ai-card-1.component';

describe('AiCard1Component', () => {
  let component: AiCard1Component;
  let fixture: ComponentFixture<AiCard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiCard1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
