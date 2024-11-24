import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileView1Component } from './tile-view-1.component';

describe('TileView1Component', () => {
  let component: TileView1Component;
  let fixture: ComponentFixture<TileView1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TileView1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TileView1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
