import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPanel7Component } from './filter-panel-7.component';

describe('FilterPanel7Component', () => {
  let component: FilterPanel7Component;
  let fixture: ComponentFixture<FilterPanel7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterPanel7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterPanel7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
