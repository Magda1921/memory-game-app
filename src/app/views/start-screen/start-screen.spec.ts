import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartScreen } from './start-screen';
import { provideZonelessChangeDetection } from '@angular/core';

describe('StartScreen', () => {
  let component: StartScreen;
  let fixture: ComponentFixture<StartScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartScreen],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(StartScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
