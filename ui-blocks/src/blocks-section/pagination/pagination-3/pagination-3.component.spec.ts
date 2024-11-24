import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagination3Component } from './pagination-3.component';

describe('Pagination3Component', () => {
  let component: Pagination3Component;
  let fixture: ComponentFixture<Pagination3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pagination3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pagination3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
