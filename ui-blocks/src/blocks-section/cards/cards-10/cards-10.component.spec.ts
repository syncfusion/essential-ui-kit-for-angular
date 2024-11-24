import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cards10Component } from './cards-10.component';

describe('Cards10Component', () => {
  let component: Cards10Component;
  let fixture: ComponentFixture<Cards10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cards10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cards10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
