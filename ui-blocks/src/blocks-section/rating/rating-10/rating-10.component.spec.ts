import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rating10Component } from './rating-10.component';

describe('Rating10Component', () => {
  let component: Rating10Component;
  let fixture: ComponentFixture<Rating10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rating10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rating10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
