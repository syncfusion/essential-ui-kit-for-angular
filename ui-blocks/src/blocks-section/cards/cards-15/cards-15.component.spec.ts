import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cards15Component } from './cards-15.component';

describe('Cards15Component', () => {
  let component: Cards15Component;
  let fixture: ComponentFixture<Cards15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cards15Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cards15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
