import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidebar4Component } from './sidebar-4.component';

describe('Sidebar4Component', () => {
  let component: Sidebar4Component;
  let fixture: ComponentFixture<Sidebar4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sidebar4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sidebar4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
