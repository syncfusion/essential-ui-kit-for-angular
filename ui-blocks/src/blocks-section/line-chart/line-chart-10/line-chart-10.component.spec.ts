import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChart10Component } from './line-chart-10.component';

describe('LineChart10Component', () => {
  let component: LineChart10Component;
  let fixture: ComponentFixture<LineChart10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineChart10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineChart10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
