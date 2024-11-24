import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidebar7Component } from './sidebar-7.component';

describe('Sidebar7Component', () => {
  let component: Sidebar7Component;
  let fixture: ComponentFixture<Sidebar7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sidebar7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sidebar7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
