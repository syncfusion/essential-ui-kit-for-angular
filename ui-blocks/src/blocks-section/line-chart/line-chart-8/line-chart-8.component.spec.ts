import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChart8Component } from './line-chart-8.component';

describe('LineChart8Component', () => {
  let component: LineChart8Component;
  let fixture: ComponentFixture<LineChart8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineChart8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineChart8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
