import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsDemoComponent } from './modals-demo.component';

describe('ModalsDemoComponent', () => {
  let component: ModalsDemoComponent;
  let fixture: ComponentFixture<ModalsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalsDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
