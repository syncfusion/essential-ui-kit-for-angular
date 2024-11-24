import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileView5Component } from './tile-view-5.component';

describe('TileView5Component', () => {
  let component: TileView5Component;
  let fixture: ComponentFixture<TileView5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TileView5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TileView5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
