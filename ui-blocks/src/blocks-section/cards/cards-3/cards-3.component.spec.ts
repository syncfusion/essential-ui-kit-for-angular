import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cards3Component } from './cards-3.component';

describe('Cards3Component', () => {
  let component: Cards3Component;
  let fixture: ComponentFixture<Cards3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cards3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cards3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
