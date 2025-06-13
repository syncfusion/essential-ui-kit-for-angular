import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiSearchDemoComponent } from './ai-search-demo.component';

describe('AiSearchDemoComponent', () => {
  let component: AiSearchDemoComponent;
  let fixture: ComponentFixture<AiSearchDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiSearchDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiSearchDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
