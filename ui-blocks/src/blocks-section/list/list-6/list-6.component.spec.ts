import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List6Component } from './list-6.component';

describe('List6Component', () => {
  let component: List6Component;
  let fixture: ComponentFixture<List6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [List6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(List6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
