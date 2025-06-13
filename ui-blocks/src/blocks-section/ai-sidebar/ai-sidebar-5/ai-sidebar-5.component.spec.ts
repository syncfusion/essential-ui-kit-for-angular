import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiSidebar5Component } from './ai-sidebar-5.component';

describe('AiSidebar5Component', () => {
  let component: AiSidebar5Component;
  let fixture: ComponentFixture<AiSidebar5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiSidebar5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiSidebar5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
