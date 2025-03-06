import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header10Component } from './header-10.component';

describe('Header10Component', () => {
  let component: Header10Component;
  let fixture: ComponentFixture<Header10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
