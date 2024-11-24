import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileView4Component } from './tile-view-4.component';

describe('TileView4Component', () => {
  let component: TileView4Component;
  let fixture: ComponentFixture<TileView4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TileView4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TileView4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
