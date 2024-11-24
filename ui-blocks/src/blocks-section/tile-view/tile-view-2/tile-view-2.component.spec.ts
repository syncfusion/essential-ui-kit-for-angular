import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileView2Component } from './tile-view-2.component';

describe('TileView2Component', () => {
  let component: TileView2Component;
  let fixture: ComponentFixture<TileView2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TileView2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TileView2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
