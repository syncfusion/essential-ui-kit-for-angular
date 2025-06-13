import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChart4Component } from './line-chart-4.component';

describe('LineChart4Component', () => {
  let component: LineChart4Component;
  let fixture: ComponentFixture<LineChart4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineChart4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineChart4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
