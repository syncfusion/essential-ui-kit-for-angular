import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiSidebar2Component } from './ai-sidebar-2.component';

describe('AiSidebar2Component', () => {
  let component: AiSidebar2Component;
  let fixture: ComponentFixture<AiSidebar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiSidebar2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiSidebar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
