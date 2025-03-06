import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header3Component } from './header-3.component';

describe('Header3Component', () => {
  let component: Header3Component;
  let fixture: ComponentFixture<Header3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
