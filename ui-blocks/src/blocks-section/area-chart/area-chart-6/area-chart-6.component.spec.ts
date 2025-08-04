import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaChart6Component } from './area-chart-6.component';

describe('AreaChart6Component', () => {
  let component: AreaChart6Component;
  let fixture: ComponentFixture<AreaChart6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaChart6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaChart6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
