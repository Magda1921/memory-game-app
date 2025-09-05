import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryCardGrid } from './memory-card-grid';

describe('MemoryCardGrid', () => {
  let component: MemoryCardGrid;
  let fixture: ComponentFixture<MemoryCardGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemoryCardGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoryCardGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
