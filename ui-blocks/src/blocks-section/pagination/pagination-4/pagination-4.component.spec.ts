import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagination4Component } from './pagination-4.component';

describe('Pagination4Component', () => {
  let component: Pagination4Component;
  let fixture: ComponentFixture<Pagination4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pagination4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pagination4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
