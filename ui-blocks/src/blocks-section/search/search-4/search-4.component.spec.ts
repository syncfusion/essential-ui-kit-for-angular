import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Search4Component } from './search-4.component';

describe('Search4Component', () => {
  let component: Search4Component;
  let fixture: ComponentFixture<Search4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Search4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Search4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
