import { TestBed } from '@angular/core/testing';

import { ValidateInputFieldService } from './validate-input-field.service';

describe('ValidateInputFieldService', () => {
  let service: ValidateInputFieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidateInputFieldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
