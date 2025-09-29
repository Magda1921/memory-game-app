import { TestBed } from '@angular/core/testing';
import { GameHelper } from './game-helper';

describe('GameHelper', () => {
  let service: GameHelper;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameHelper);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
