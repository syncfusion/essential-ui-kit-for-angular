import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiSetting1Component } from './ai-setting-1.component';

describe('AiSetting1Component', () => {
  let component: AiSetting1Component;
  let fixture: ComponentFixture<AiSetting1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiSetting1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiSetting1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
