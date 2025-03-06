import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPanel6Component } from './filter-panel-6.component';

describe('FilterPanel6Component', () => {
  let component: FilterPanel6Component;
  let fixture: ComponentFixture<FilterPanel6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterPanel6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterPanel6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
