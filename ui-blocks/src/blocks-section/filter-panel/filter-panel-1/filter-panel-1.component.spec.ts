import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPanel1Component } from './filter-panel-1.component';

describe('FilterPanel1Component', () => {
  let component: FilterPanel1Component;
  let fixture: ComponentFixture<FilterPanel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterPanel1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterPanel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
