import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rating8Component } from './rating-8.component';

describe('Rating8Component', () => {
  let component: Rating8Component;
  let fixture: ComponentFixture<Rating8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rating8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rating8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
