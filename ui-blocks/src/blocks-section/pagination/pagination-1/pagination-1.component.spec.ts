import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagination1Component } from './pagination-1.component';

describe('Pagination1Component', () => {
  let component: Pagination1Component;
  let fixture: ComponentFixture<Pagination1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pagination1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pagination1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
