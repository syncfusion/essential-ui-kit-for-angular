import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Returns5Component } from './returns-5.component';

describe('Returns5Component', () => {
  let component: Returns5Component;
  let fixture: ComponentFixture<Returns5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Returns5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Returns5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
