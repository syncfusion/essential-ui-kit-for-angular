import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiSidebar3Component } from './ai-sidebar-3.component';

describe('AiSidebar3Component', () => {
  let component: AiSidebar3Component;
  let fixture: ComponentFixture<AiSidebar3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiSidebar3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiSidebar3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
