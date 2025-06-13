import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiSearch2Component } from './ai-search-2.component';

describe('AiSearch2Component', () => {
  let component: AiSearch2Component;
  let fixture: ComponentFixture<AiSearch2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiSearch2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiSearch2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
