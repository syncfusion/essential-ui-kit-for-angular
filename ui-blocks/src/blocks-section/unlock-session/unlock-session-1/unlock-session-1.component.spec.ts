import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockSession1Component } from './unlock-session-1.component';

describe('UnlockSession1Component', () => {
  let component: UnlockSession1Component;
  let fixture: ComponentFixture<UnlockSession1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnlockSession1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnlockSession1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
