import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rating14Component } from './rating-14.component';

describe('Rating14Component', () => {
  let component: Rating14Component;
  let fixture: ComponentFixture<Rating14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rating14Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rating14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
