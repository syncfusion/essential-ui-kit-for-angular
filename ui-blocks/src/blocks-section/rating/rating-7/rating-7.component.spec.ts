import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rating7Component } from './rating-7.component';

describe('Rating7Component', () => {
  let component: Rating7Component;
  let fixture: ComponentFixture<Rating7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rating7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rating7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
