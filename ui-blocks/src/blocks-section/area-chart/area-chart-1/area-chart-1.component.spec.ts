import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaChart1Component } from './area-chart-1.component';

describe('AreaChart1Component', () => {
  let component: AreaChart1Component;
  let fixture: ComponentFixture<AreaChart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaChart1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaChart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
