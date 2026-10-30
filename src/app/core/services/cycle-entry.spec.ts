import { TestBed } from '@angular/core/testing';
import { CycleEntry } from './cycle-entry';

describe('CycleEntry', () => {
  let service: CycleEntry;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CycleEntry);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
