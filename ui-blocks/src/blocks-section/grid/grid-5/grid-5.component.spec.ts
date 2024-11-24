import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grid5Component } from './grid-5.component';

describe('Grid5Component', () => {
  let component: Grid5Component;
  let fixture: ComponentFixture<Grid5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Grid5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grid5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
