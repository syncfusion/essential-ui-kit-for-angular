import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Statistics7Component } from './statistics-7.component';

describe('Statistics7Component', () => {
  let component: Statistics7Component;
  let fixture: ComponentFixture<Statistics7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Statistics7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Statistics7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
