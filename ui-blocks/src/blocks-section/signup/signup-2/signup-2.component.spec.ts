import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signup2Component } from './signup-2.component';

describe('Signup2Component', () => {
  let component: Signup2Component;
  let fixture: ComponentFixture<Signup2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signup2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Signup2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
