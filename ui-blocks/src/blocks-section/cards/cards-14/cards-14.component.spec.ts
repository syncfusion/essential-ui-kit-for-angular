import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cards14Component } from './cards-14.component';

describe('Cards14Component', () => {
  let component: Cards14Component;
  let fixture: ComponentFixture<Cards14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cards14Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cards14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
