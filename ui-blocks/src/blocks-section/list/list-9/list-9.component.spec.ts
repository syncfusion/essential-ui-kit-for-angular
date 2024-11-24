import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List9Component } from './list-9.component';

describe('List9Component', () => {
  let component: List9Component;
  let fixture: ComponentFixture<List9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [List9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(List9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
