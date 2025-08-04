import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChart6Component } from './line-chart-6.component';

describe('LineChart6Component', () => {
  let component: LineChart6Component;
  let fixture: ComponentFixture<LineChart6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineChart6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineChart6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
