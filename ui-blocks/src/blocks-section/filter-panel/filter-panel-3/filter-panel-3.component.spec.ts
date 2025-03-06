import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPanel3Component } from './filter-panel-3.component';

describe('FilterPanel3Component', () => {
  let component: FilterPanel3Component;
  let fixture: ComponentFixture<FilterPanel3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterPanel3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterPanel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
