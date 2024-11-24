import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Email1Component } from './email-1.component';

describe('Email1Component', () => {
  let component: Email1Component;
  let fixture: ComponentFixture<Email1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Email1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Email1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
