import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List5Component } from './list-5.component';

describe('List5Component', () => {
  let component: List5Component;
  let fixture: ComponentFixture<List5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [List5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(List5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
