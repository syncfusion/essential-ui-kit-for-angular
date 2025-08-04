import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaChart9Component } from './area-chart-9.component';

describe('AreaChart9Component', () => {
  let component: AreaChart9Component;
  let fixture: ComponentFixture<AreaChart9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaChart9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaChart9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
