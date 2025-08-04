import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rating11Component } from './rating-11.component';

describe('Rating11Component', () => {
  let component: Rating11Component;
  let fixture: ComponentFixture<Rating11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rating11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rating11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
