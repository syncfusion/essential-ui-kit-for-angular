import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiSidebar1Component } from './ai-sidebar-1.component';

describe('AiSidebar1Component', () => {
  let component: AiSidebar1Component;
  let fixture: ComponentFixture<AiSidebar1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiSidebar1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiSidebar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
