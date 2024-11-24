import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List10Component } from './list-10.component';

describe('List10Component', () => {
  let component: List10Component;
  let fixture: ComponentFixture<List10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [List10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(List10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
