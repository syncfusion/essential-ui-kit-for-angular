import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List3Component } from './list-3.component';

describe('List3Component', () => {
  let component: List3Component;
  let fixture: ComponentFixture<List3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [List3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(List3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
