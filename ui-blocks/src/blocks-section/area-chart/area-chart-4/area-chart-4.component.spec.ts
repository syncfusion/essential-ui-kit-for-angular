import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaChart4Component } from './area-chart-4.component';

describe('AreaChart4Component', () => {
  let component: AreaChart4Component;
  let fixture: ComponentFixture<AreaChart4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaChart4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaChart4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
