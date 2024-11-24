import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer1Component } from './footer-1.component';

describe('Footer1Component', () => {
  let component: Footer1Component;
  let fixture: ComponentFixture<Footer1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
