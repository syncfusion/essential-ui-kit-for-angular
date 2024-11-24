import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List1Component } from './list-1.component';

describe('List1Component', () => {
  let component: List1Component;
  let fixture: ComponentFixture<List1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [List1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(List1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
