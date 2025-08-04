import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChart5Component } from './line-chart-5.component';

describe('LineChart5Component', () => {
  let component: LineChart5Component;
  let fixture: ComponentFixture<LineChart5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineChart5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineChart5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
