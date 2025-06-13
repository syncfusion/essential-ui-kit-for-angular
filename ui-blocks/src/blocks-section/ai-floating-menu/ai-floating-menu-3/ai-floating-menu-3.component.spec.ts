import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiFloatingMenu3Component } from './ai-floating-menu-3.component';

describe('AiFloatingMenu3Component', () => {
  let component: AiFloatingMenu3Component;
  let fixture: ComponentFixture<AiFloatingMenu3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiFloatingMenu3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiFloatingMenu3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
