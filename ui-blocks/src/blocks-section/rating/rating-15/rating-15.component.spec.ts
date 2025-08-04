import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rating15Component } from './rating-15.component';

describe('Rating15Component', () => {
  let component: Rating15Component;
  let fixture: ComponentFixture<Rating15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rating15Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rating15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
