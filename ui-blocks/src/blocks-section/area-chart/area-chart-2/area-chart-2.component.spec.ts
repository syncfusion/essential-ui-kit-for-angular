import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaChart2Component } from './area-chart-2.component';

describe('AreaChart2Component', () => {
  let component: AreaChart2Component;
  let fixture: ComponentFixture<AreaChart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaChart2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaChart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
