import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidebar8Component } from './sidebar-8.component';

describe('Sidebar8Component', () => {
  let component: Sidebar8Component;
  let fixture: ComponentFixture<Sidebar8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sidebar8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sidebar8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
