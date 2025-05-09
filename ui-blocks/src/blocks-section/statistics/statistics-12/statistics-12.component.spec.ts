import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Statistics12Component } from './statistics-12.component';

describe('Statistics12Component', () => {
  let component: Statistics12Component;
  let fixture: ComponentFixture<Statistics12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Statistics12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Statistics12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
