import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingMenu1Component } from './floating-menu-1.component';

describe('FloatingMenu1Component', () => {
  let component: FloatingMenu1Component;
  let fixture: ComponentFixture<FloatingMenu1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatingMenu1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatingMenu1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
