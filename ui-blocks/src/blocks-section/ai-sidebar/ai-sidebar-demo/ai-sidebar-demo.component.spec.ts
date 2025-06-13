import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiSidebarDemoComponent } from './ai-sidebar-demo.component';

describe('AiSidebarDemoComponent', () => {
  let component: AiSidebarDemoComponent;
  let fixture: ComponentFixture<AiSidebarDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiSidebarDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiSidebarDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
