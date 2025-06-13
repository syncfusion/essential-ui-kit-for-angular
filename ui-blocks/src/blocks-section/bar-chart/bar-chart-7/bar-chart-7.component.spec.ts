import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChart7Component } from './bar-chart-7.component';

describe('BarChart7Component', () => {
  let component: BarChart7Component;
  let fixture: ComponentFixture<BarChart7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarChart7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarChart7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
