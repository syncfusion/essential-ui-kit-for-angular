import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChart2Component } from './bar-chart-2.component';

describe('BarChart2Component', () => {
  let component: BarChart2Component;
  let fixture: ComponentFixture<BarChart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarChart2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarChart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
