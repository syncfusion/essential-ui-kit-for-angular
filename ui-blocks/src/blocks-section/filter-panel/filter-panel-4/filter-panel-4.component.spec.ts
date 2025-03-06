import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPanel4Component } from './filter-panel-4.component';

describe('FilterPanel4Component', () => {
  let component: FilterPanel4Component;
  let fixture: ComponentFixture<FilterPanel4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterPanel4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterPanel4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
