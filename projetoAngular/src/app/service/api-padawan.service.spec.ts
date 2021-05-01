import { TestBed } from '@angular/core/testing';

import { ApiPadawanService } from './api-padawan.service';

describe('ApiPadawanService', () => {
  let service: ApiPadawanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPadawanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
