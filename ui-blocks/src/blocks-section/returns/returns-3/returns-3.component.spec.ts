import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Returns3Component } from './returns-3.component';

describe('Returns3Component', () => {
  let component: Returns3Component;
  let fixture: ComponentFixture<Returns3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Returns3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Returns3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
