import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Returns1Component } from './returns-1.component';

describe('Returns1Component', () => {
  let component: Returns1Component;
  let fixture: ComponentFixture<Returns1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Returns1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Returns1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
