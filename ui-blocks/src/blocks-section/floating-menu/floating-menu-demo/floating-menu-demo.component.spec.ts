import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingMenuDemoComponent } from './floating-menu-demo.component';

describe('FloatingMenuDemoComponent', () => {
  let component: FloatingMenuDemoComponent;
  let fixture: ComponentFixture<FloatingMenuDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatingMenuDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatingMenuDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
