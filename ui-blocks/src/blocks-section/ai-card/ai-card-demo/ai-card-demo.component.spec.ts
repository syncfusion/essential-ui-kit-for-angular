import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiCardDemoComponent } from './ai-card-demo.component';

describe('AiCardDemoComponent', () => {
  let component: AiCardDemoComponent;
  let fixture: ComponentFixture<AiCardDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiCardDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiCardDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
