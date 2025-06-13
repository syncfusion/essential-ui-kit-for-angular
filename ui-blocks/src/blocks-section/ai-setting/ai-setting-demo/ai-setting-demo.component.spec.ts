import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiSettingDemoComponent } from './ai-setting-demo.component';

describe('AiSettingDemoComponent', () => {
  let component: AiSettingDemoComponent;
  let fixture: ComponentFixture<AiSettingDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiSettingDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiSettingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
