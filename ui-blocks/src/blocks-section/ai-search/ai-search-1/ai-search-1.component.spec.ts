import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiSearch1Component } from './ai-search-1.component';

describe('AiSearch1Component', () => {
  let component: AiSearch1Component;
  let fixture: ComponentFixture<AiSearch1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiSearch1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiSearch1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
