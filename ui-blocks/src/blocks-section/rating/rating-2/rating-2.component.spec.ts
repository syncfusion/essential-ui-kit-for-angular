import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rating2Component } from './rating-2.component';

describe('Rating2Component', () => {
  let component: Rating2Component;
  let fixture: ComponentFixture<Rating2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rating2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rating2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
