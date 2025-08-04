import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rating13Component } from './rating-13.component';

describe('Rating13Component', () => {
  let component: Rating13Component;
  let fixture: ComponentFixture<Rating13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rating13Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rating13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
