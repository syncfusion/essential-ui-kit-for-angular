import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPanelDemoComponent } from './filter-panel-demo.component';

describe('FilterPanelDemoComponent', () => {
  let component: FilterPanelDemoComponent;
  let fixture: ComponentFixture<FilterPanelDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterPanelDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterPanelDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
