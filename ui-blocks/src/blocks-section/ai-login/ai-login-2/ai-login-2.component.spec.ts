import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiLogin2Component } from './ai-login-2.component';

describe('AiLogin2Component', () => {
  let component: AiLogin2Component;
  let fixture: ComponentFixture<AiLogin2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiLogin2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiLogin2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
