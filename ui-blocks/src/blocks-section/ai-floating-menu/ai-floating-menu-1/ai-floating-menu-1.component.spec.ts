import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiFloatingMenu1Component } from './ai-floating-menu-1.component';

describe('AiFloatingMenu1Component', () => {
  let component: AiFloatingMenu1Component;
  let fixture: ComponentFixture<AiFloatingMenu1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiFloatingMenu1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiFloatingMenu1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
