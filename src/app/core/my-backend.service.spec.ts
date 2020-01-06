import { TestBed } from '@angular/core/testing';

import { MyBackendService } from './my-backend.service';

describe('MyBackendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyBackendService = TestBed.get(MyBackendService);
    expect(service).toBeTruthy();
  });
});
