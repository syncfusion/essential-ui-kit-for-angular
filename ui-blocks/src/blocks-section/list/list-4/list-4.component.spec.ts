import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List4Component } from './list-4.component';

describe('List4Component', () => {
  let component: List4Component;
  let fixture: ComponentFixture<List4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [List4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(List4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
