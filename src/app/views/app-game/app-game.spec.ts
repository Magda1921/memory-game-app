import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGame } from './app-game';
import { provideZonelessChangeDetection } from '@angular/core';

describe('AppGame', () => {
  let component: AppGame;
  let fixture: ComponentFixture<AppGame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppGame],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(AppGame);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
