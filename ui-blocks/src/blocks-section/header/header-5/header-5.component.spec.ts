import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header5Component } from './header-5.component';

describe('Header5Component', () => {
  let component: Header5Component;
  let fixture: ComponentFixture<Header5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
