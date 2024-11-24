import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Returns2Component } from './returns-2.component';

describe('Returns2Component', () => {
  let component: Returns2Component;
  let fixture: ComponentFixture<Returns2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Returns2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Returns2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
