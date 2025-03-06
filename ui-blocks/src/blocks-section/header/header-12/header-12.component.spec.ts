import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header12Component } from './header-12.component';

describe('Header12Component', () => {
  let component: Header12Component;
  let fixture: ComponentFixture<Header12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
