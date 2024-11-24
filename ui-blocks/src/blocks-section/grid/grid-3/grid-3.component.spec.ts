import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grid3Component } from './grid-3.component';

describe('Grid3Component', () => {
  let component: Grid3Component;
  let fixture: ComponentFixture<Grid3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Grid3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grid3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
