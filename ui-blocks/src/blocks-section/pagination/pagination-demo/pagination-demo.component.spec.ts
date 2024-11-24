import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationDemoComponent } from './pagination-demo.component';

describe('PaginationDemoComponent', () => {
  let component: PaginationDemoComponent;
  let fixture: ComponentFixture<PaginationDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
