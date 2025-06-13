import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiFaq1Component } from './ai-faq-1.component';

describe('AiFaq1Component', () => {
  let component: AiFaq1Component;
  let fixture: ComponentFixture<AiFaq1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiFaq1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiFaq1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
