import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Statistics10Component } from './statistics-10.component';

describe('Statistics10Component', () => {
  let component: Statistics10Component;
  let fixture: ComponentFixture<Statistics10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Statistics10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Statistics10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
