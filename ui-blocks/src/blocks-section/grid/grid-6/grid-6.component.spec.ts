import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grid6Component } from './grid-6.component';

describe('Grid6Component', () => {
  let component: Grid6Component;
  let fixture: ComponentFixture<Grid6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Grid6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grid6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
