import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChart9Component } from './line-chart-9.component';

describe('LineChart9Component', () => {
  let component: LineChart9Component;
  let fixture: ComponentFixture<LineChart9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineChart9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineChart9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
