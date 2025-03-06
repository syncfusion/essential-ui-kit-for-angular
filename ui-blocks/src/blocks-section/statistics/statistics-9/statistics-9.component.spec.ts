import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Statistics9Component } from './statistics-9.component';

describe('Statistics9Component', () => {
  let component: Statistics9Component;
  let fixture: ComponentFixture<Statistics9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Statistics9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Statistics9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
