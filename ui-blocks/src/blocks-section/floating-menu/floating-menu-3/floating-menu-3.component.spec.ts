import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingMenu3Component } from './floating-menu-3.component';

describe('FloatingMenu3Component', () => {
  let component: FloatingMenu3Component;
  let fixture: ComponentFixture<FloatingMenu3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatingMenu3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatingMenu3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
