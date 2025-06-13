import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rating4Component } from './rating-4.component';

describe('Rating4Component', () => {
  let component: Rating4Component;
  let fixture: ComponentFixture<Rating4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rating4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rating4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
