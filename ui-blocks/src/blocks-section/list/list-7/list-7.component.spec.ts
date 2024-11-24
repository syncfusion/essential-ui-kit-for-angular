import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List7Component } from './list-7.component';

describe('List7Component', () => {
  let component: List7Component;
  let fixture: ComponentFixture<List7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [List7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(List7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
