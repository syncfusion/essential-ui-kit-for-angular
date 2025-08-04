import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rating12Component } from './rating-12.component';

describe('Rating12Component', () => {
  let component: Rating12Component;
  let fixture: ComponentFixture<Rating12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rating12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rating12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
