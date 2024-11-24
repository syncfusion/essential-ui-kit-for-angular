import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidebar2Component } from './sidebar-2.component';

describe('Sidebar2Component', () => {
  let component: Sidebar2Component;
  let fixture: ComponentFixture<Sidebar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sidebar2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sidebar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
