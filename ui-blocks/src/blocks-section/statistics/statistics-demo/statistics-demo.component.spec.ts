import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsDemoComponent } from './statistics-demo.component';

describe('StatisticsDemoComponent', () => {
  let component: StatisticsDemoComponent;
  let fixture: ComponentFixture<StatisticsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatisticsDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
