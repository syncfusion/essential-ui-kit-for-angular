import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidebar1Component } from './sidebar-1.component';

describe('Sidebar1Component', () => {
  let component: Sidebar1Component;
  let fixture: ComponentFixture<Sidebar1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sidebar1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sidebar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
