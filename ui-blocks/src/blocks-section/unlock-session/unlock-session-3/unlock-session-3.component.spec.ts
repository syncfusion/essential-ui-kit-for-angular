import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockSession3Component } from './unlock-session-3.component';

describe('UnlockSession3Component', () => {
  let component: UnlockSession3Component;
  let fixture: ComponentFixture<UnlockSession3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnlockSession3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnlockSession3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
