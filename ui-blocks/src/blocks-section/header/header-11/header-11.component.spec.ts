import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header11Component } from './header-11.component';

describe('Header11Component', () => {
  let component: Header11Component;
  let fixture: ComponentFixture<Header11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
