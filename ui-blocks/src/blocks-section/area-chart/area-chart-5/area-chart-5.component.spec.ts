import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaChart5Component } from './area-chart-5.component';

describe('AreaChart5Component', () => {
  let component: AreaChart5Component;
  let fixture: ComponentFixture<AreaChart5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaChart5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaChart5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
