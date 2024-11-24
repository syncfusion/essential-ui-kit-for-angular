import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockSessionDemoComponent } from './unlock-session-demo.component';

describe('UnlockSessionDemoComponent', () => {
  let component: UnlockSessionDemoComponent;
  let fixture: ComponentFixture<UnlockSessionDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnlockSessionDemoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UnlockSessionDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
