import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header4Component } from './header-4.component';

describe('Header4Component', () => {
  let component: Header4Component;
  let fixture: ComponentFixture<Header4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
