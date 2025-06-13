import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChart1Component } from './bar-chart-1.component';

describe('BarChart1Component', () => {
  let component: BarChart1Component;
  let fixture: ComponentFixture<BarChart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarChart1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarChart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
