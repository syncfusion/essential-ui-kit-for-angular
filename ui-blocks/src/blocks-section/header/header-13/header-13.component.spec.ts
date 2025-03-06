import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header13Component } from './header-13.component';

describe('Header13Component', () => {
  let component: Header13Component;
  let fixture: ComponentFixture<Header13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header13Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
