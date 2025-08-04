import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rating16Component } from './rating-16.component';

describe('Rating16Component', () => {
  let component: Rating16Component;
  let fixture: ComponentFixture<Rating16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rating16Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rating16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
