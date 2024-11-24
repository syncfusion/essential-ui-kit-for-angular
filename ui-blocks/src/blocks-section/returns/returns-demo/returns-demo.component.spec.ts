import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnsDemoComponent } from './returns-demo.component';

describe('ReturnsDemoComponent', () => {
  let component: ReturnsDemoComponent;
  let fixture: ComponentFixture<ReturnsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReturnsDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
