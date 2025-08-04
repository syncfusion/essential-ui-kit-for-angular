import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rating9Component } from './rating-9.component';

describe('Rating9Component', () => {
  let component: Rating9Component;
  let fixture: ComponentFixture<Rating9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rating9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rating9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
