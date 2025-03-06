import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header8Component } from './header-8.component';

describe('Header8Component', () => {
  let component: Header8Component;
  let fixture: ComponentFixture<Header8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
