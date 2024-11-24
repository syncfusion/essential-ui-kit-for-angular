import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cards7Component } from './cards-7.component';

describe('Cards7Component', () => {
  let component: Cards7Component;
  let fixture: ComponentFixture<Cards7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cards7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cards7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
