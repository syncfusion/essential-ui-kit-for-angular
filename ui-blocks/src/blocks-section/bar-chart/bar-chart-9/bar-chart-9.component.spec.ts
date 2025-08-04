import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChart9Component } from './bar-chart-9.component';

describe('BarChart9Component', () => {
  let component: BarChart9Component;
  let fixture: ComponentFixture<BarChart9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarChart9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarChart9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
