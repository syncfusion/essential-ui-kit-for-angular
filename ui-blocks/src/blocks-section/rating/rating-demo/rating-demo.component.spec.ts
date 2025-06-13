import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingDemoComponent } from './rating-demo.component';

describe('RatingDemoComponent', () => {
  let component: RatingDemoComponent;
  let fixture: ComponentFixture<RatingDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
