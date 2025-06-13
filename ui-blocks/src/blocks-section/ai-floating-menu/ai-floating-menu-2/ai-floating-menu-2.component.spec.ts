import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiFloatingMenu2Component } from './ai-floating-menu-2.component';

describe('AiFloatingMenu2Component', () => {
  let component: AiFloatingMenu2Component;
  let fixture: ComponentFixture<AiFloatingMenu2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiFloatingMenu2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiFloatingMenu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
