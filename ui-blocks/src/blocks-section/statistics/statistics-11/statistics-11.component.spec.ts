import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Statistics11Component } from './statistics-11.component';

describe('Statistics11Component', () => {
  let component: Statistics11Component;
  let fixture: ComponentFixture<Statistics11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Statistics11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Statistics11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
