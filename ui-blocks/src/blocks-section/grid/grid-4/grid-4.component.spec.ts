import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grid4Component } from './grid-4.component';

describe('Grid4Component', () => {
  let component: Grid4Component;
  let fixture: ComponentFixture<Grid4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Grid4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grid4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
