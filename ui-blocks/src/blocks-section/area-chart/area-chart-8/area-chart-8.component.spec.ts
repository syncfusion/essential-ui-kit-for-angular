import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaChart8Component } from './area-chart-8.component';

describe('AreaChart8Component', () => {
  let component: AreaChart8Component;
  let fixture: ComponentFixture<AreaChart8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaChart8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaChart8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
