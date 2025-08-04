import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChart7Component } from './line-chart-7.component';

describe('LineChart7Component', () => {
  let component: LineChart7Component;
  let fixture: ComponentFixture<LineChart7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineChart7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineChart7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
