import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidebar12Component } from './sidebar-12.component';

describe('Sidebar12Component', () => {
  let component: Sidebar12Component;
  let fixture: ComponentFixture<Sidebar12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sidebar12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sidebar12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
