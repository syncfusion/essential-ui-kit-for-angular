import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPanel2Component } from './filter-panel-2.component';

describe('FilterPanel2Component', () => {
  let component: FilterPanel2Component;
  let fixture: ComponentFixture<FilterPanel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterPanel2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterPanel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
