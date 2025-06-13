import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rating3Component } from './rating-3.component';

describe('Rating3Component', () => {
  let component: Rating3Component;
  let fixture: ComponentFixture<Rating3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rating3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rating3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
