import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Statistics4Component } from './statistics-4.component';

describe('Statistics4Component', () => {
  let component: Statistics4Component;
  let fixture: ComponentFixture<Statistics4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Statistics4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Statistics4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
