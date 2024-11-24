import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidebar10Component } from './sidebar-10.component';

describe('Sidebar10Component', () => {
  let component: Sidebar10Component;
  let fixture: ComponentFixture<Sidebar10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sidebar10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sidebar10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
