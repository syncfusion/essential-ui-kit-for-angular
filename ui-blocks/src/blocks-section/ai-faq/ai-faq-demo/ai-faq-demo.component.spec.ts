import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiFaqDemoComponent } from './ai-faq-demo.component';

describe('AiFaqDemoComponent', () => {
  let component: AiFaqDemoComponent;
  let fixture: ComponentFixture<AiFaqDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiFaqDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiFaqDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
