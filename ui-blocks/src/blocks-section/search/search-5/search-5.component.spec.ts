import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Search5Component } from './search-5.component';

describe('Search5Component', () => {
  let component: Search5Component;
  let fixture: ComponentFixture<Search5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Search5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Search5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
