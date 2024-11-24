import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailDemoComponent } from './email-demo.component';

describe('EmailDemoComponent', () => {
  let component: EmailDemoComponent;
  let fixture: ComponentFixture<EmailDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
