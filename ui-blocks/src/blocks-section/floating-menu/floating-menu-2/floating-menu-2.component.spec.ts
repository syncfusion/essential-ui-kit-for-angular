import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingMenu2Component } from './floating-menu-2.component';

describe('FloatingMenu2Component', () => {
  let component: FloatingMenu2Component;
  let fixture: ComponentFixture<FloatingMenu2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatingMenu2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatingMenu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
