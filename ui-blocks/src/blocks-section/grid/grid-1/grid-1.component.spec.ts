import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grid1Component } from './grid-1.component';

describe('Grid1Component', () => {
  let component: Grid1Component;
  let fixture: ComponentFixture<Grid1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Grid1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grid1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
