import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterChart1Component } from './scatter-chart-1.component';

describe('ScatterChart1Component', () => {
  let component: ScatterChart1Component;
  let fixture: ComponentFixture<ScatterChart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScatterChart1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScatterChart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
