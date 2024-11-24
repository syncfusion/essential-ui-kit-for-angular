import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidebar11Component } from './sidebar-11.component';

describe('Sidebar11Component', () => {
  let component: Sidebar11Component;
  let fixture: ComponentFixture<Sidebar11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sidebar11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sidebar11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
