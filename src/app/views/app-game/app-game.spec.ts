import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGame } from './app-game';

describe('AppGame', () => {
  let component: AppGame;
  let fixture: ComponentFixture<AppGame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppGame]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppGame);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
