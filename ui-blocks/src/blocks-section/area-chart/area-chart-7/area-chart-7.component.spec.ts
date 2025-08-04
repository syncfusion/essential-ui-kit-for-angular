import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaChart7Component } from './area-chart-7.component';

describe('AreaChart7Component', () => {
  let component: AreaChart7Component;
  let fixture: ComponentFixture<AreaChart7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaChart7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaChart7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
