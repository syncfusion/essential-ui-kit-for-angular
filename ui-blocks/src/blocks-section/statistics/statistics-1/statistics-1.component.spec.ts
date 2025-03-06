import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Statistics1Component } from './statistics-1.component';

describe('Statistics1Component', () => {
  let component: Statistics1Component;
  let fixture: ComponentFixture<Statistics1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Statistics1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Statistics1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
