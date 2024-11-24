import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDemoComponent } from './footer-demo.component';

describe('FooterDemoComponent', () => {
  let component: FooterDemoComponent;
  let fixture: ComponentFixture<FooterDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
