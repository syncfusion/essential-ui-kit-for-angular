import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Statistics8Component } from './statistics-8.component';

describe('Statistics8Component', () => {
  let component: Statistics8Component;
  let fixture: ComponentFixture<Statistics8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Statistics8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Statistics8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
