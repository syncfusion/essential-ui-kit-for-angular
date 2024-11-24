import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cards4Component } from './cards-4.component';

describe('Cards4Component', () => {
  let component: Cards4Component;
  let fixture: ComponentFixture<Cards4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cards4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cards4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
