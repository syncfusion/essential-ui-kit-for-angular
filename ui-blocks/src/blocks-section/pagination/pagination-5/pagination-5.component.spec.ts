import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagination5Component } from './pagination-5.component';

describe('Pagination5Component', () => {
  let component: Pagination5Component;
  let fixture: ComponentFixture<Pagination5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pagination5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pagination5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
