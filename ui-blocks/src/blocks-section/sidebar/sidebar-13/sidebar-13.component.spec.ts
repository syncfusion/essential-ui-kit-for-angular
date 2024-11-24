import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidebar13Component } from './sidebar-13.component';

describe('Sidebar13Component', () => {
  let component: Sidebar13Component;
  let fixture: ComponentFixture<Sidebar13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sidebar13Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sidebar13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
