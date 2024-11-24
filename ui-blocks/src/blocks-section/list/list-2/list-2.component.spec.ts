import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List2Component } from './list-2.component';

describe('List2Component', () => {
  let component: List2Component;
  let fixture: ComponentFixture<List2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [List2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(List2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
