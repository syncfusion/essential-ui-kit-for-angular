import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaChartDemoComponent } from './area-chart-demo.component';

describe('AreaChartDemoComponent', () => {
  let component: AreaChartDemoComponent;
  let fixture: ComponentFixture<AreaChartDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaChartDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaChartDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
