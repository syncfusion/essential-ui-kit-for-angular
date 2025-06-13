import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChart1Component } from './line-chart-1.component';

describe('LineChart1Component', () => {
  let component: LineChart1Component;
  let fixture: ComponentFixture<LineChart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineChart1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineChart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
