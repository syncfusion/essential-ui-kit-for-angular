import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer5Component } from './footer-5.component';

describe('Footer5Component', () => {
  let component: Footer5Component;
  let fixture: ComponentFixture<Footer5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footer5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
