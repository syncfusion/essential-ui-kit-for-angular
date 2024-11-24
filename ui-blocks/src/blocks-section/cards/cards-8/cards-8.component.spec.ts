import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cards8Component } from './cards-8.component';

describe('Cards8Component', () => {
  let component: Cards8Component;
  let fixture: ComponentFixture<Cards8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cards8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cards8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
