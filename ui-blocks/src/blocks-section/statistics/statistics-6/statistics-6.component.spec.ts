import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Statistics6Component } from './statistics-6.component';

describe('Statistics6Component', () => {
  let component: Statistics6Component;
  let fixture: ComponentFixture<Statistics6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Statistics6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Statistics6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
