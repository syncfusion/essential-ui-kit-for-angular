import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChart4Component } from './bar-chart-4.component';

describe('BarChart4Component', () => {
  let component: BarChart4Component;
  let fixture: ComponentFixture<BarChart4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarChart4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarChart4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
