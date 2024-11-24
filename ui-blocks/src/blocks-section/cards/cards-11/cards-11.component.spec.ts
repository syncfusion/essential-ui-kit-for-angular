import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cards11Component } from './cards-11.component';

describe('Cards11Component', () => {
  let component: Cards11Component;
  let fixture: ComponentFixture<Cards11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cards11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cards11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
