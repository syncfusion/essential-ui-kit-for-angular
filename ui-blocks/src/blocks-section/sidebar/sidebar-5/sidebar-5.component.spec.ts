import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidebar5Component } from './sidebar-5.component';

describe('Sidebar5Component', () => {
  let component: Sidebar5Component;
  let fixture: ComponentFixture<Sidebar5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sidebar5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sidebar5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
