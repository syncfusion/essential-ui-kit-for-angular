import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagination6Component } from './pagination-6.component';

describe('Pagination6Component', () => {
  let component: Pagination6Component;
  let fixture: ComponentFixture<Pagination6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pagination6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pagination6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
