import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileView3Component } from './tile-view-3.component';

describe('TileView3Component', () => {
  let component: TileView3Component;
  let fixture: ComponentFixture<TileView3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TileView3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TileView3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
