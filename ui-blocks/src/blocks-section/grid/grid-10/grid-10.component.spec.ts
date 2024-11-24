import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grid10Component } from './grid-10.component';

describe('Grid10Component', () => {
  let component: Grid10Component;
  let fixture: ComponentFixture<Grid10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Grid10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grid10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
