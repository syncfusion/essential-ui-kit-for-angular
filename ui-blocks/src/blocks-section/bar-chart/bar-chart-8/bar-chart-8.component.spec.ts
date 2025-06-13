import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChart8Component } from './bar-chart-8.component';

describe('BarChart8Component', () => {
  let component: BarChart8Component;
  let fixture: ComponentFixture<BarChart8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarChart8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarChart8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
