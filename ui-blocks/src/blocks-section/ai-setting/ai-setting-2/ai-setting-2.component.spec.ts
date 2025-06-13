import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiSetting2Component } from './ai-setting-2.component';

describe('AiSetting2Component', () => {
  let component: AiSetting2Component;
  let fixture: ComponentFixture<AiSetting2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiSetting2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiSetting2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
