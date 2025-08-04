import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleChart1Component } from './bubble-chart-1.component';

describe('BubbleChart1Component', () => {
  let component: BubbleChart1Component;
  let fixture: ComponentFixture<BubbleChart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BubbleChart1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BubbleChart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
