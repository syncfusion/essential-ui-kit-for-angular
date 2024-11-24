import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidebar9Component } from './sidebar-9.component';

describe('Sidebar9Component', () => {
  let component: Sidebar9Component;
  let fixture: ComponentFixture<Sidebar9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sidebar9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sidebar9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
