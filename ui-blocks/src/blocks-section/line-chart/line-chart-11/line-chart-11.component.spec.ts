import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChart11Component } from './line-chart-11.component';

describe('LineChart11Component', () => {
  let component: LineChart11Component;
  let fixture: ComponentFixture<LineChart11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineChart11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineChart11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
