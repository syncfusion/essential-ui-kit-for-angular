import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockSession2Component } from './unlock-session-2.component';

describe('UnlockSession2Component', () => {
  let component: UnlockSession2Component;
  let fixture: ComponentFixture<UnlockSession2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnlockSession2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnlockSession2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
