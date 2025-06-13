import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiFloatingMenuDemoComponent } from './ai-floating-menu-demo.component';

describe('AiFloatingMenuDemoComponent', () => {
  let component: AiFloatingMenuDemoComponent;
  let fixture: ComponentFixture<AiFloatingMenuDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiFloatingMenuDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiFloatingMenuDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
