import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Search2Component } from './search-2.component';

describe('Search2Component', () => {
  let component: Search2Component;
  let fixture: ComponentFixture<Search2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Search2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Search2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
