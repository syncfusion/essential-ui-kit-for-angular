import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccumulationChart3Component } from './accumulation-chart-3.component';

describe('AccumulationChart3Component', () => {
  let component: AccumulationChart3Component;
  let fixture: ComponentFixture<AccumulationChart3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccumulationChart3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccumulationChart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
