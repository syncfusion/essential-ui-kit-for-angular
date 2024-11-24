import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer3Component } from './footer-3.component';

describe('Footer3Component', () => {
  let component: Footer3Component;
  let fixture: ComponentFixture<Footer3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footer3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
