import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Returns4Component } from './returns-4.component';

describe('Returns4Component', () => {
  let component: Returns4Component;
  let fixture: ComponentFixture<Returns4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Returns4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Returns4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
