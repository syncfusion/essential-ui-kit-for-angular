import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidebar6Component } from './sidebar-6.component';

describe('Sidebar6Component', () => {
  let component: Sidebar6Component;
  let fixture: ComponentFixture<Sidebar6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sidebar6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sidebar6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
