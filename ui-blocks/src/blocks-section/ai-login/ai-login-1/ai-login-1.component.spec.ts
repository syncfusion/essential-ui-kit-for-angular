import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiLogin1Component } from './ai-login-1.component';

describe('AiLogin1Component', () => {
  let component: AiLogin1Component;
  let fixture: ComponentFixture<AiLogin1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiLogin1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiLogin1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
