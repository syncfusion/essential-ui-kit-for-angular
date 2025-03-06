import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modals2Component } from './modals-2.component';

describe('Modals2Component', () => {
  let component: Modals2Component;
  let fixture: ComponentFixture<Modals2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modals2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modals2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
