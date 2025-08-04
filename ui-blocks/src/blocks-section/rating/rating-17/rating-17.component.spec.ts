import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rating17Component } from './rating-17.component';

describe('Rating17Component', () => {
  let component: Rating17Component;
  let fixture: ComponentFixture<Rating17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rating17Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rating17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
