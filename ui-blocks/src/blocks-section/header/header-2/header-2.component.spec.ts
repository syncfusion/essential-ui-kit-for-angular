import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header2Component } from './header-2.component';

describe('Header2Component', () => {
  let component: Header2Component;
  let fixture: ComponentFixture<Header2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
