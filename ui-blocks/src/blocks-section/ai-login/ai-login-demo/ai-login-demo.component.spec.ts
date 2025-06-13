import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiLoginDemoComponent } from './ai-login-demo.component';

describe('AiLoginDemoComponent', () => {
  let component: AiLoginDemoComponent;
  let fixture: ComponentFixture<AiLoginDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiLoginDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiLoginDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
