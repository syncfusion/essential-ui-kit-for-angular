import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPanel5Component } from './filter-panel-5.component';

describe('FilterPanel5Component', () => {
  let component: FilterPanel5Component;
  let fixture: ComponentFixture<FilterPanel5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterPanel5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterPanel5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
