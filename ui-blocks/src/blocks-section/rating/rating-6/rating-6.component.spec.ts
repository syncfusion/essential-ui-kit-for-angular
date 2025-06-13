import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rating6Component } from './rating-6.component';

describe('Rating6Component', () => {
  let component: Rating6Component;
  let fixture: ComponentFixture<Rating6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rating6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rating6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
