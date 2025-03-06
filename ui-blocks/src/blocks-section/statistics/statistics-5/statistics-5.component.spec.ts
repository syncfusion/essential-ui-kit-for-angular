import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Statistics5Component } from './statistics-5.component';

describe('Statistics5Component', () => {
  let component: Statistics5Component;
  let fixture: ComponentFixture<Statistics5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Statistics5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Statistics5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
