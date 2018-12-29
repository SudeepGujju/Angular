import { TestBed } from '@angular/core/testing';

import { AddsService } from './adds.service';

describe('AddsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddsService = TestBed.get(AddsService);
    expect(service).toBeTruthy();
  });
});
