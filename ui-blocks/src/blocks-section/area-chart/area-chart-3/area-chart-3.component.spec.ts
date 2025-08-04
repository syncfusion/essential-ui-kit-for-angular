import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaChart3Component } from './area-chart-3.component';

describe('AreaChart3Component', () => {
  let component: AreaChart3Component;
  let fixture: ComponentFixture<AreaChart3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaChart3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaChart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
