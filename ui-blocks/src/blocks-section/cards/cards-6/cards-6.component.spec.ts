import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cards6Component } from './cards-6.component';

describe('Cards6Component', () => {
  let component: Cards6Component;
  let fixture: ComponentFixture<Cards6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cards6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cards6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
