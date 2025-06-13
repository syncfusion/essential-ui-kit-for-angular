import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiSidebar4Component } from './ai-sidebar-4.component';

describe('AiSidebar4Component', () => {
  let component: AiSidebar4Component;
  let fixture: ComponentFixture<AiSidebar4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiSidebar4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiSidebar4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
