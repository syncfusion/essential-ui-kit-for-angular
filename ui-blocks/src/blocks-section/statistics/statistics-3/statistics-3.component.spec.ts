import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Statistics3Component } from './statistics-3.component';

describe('Statistics3Component', () => {
  let component: Statistics3Component;
  let fixture: ComponentFixture<Statistics3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Statistics3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Statistics3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
