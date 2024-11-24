import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileViewDemoComponent } from './tile-view-demo.component';

describe('TileViewDemoComponent', () => {
  let component: TileViewDemoComponent;
  let fixture: ComponentFixture<TileViewDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TileViewDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TileViewDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
