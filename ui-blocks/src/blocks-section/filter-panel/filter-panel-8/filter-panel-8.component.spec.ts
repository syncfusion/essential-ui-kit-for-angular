import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPanel8Component } from './filter-panel-8.component';

describe('FilterPanel8Component', () => {
  let component: FilterPanel8Component;
  let fixture: ComponentFixture<FilterPanel8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterPanel8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterPanel8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
