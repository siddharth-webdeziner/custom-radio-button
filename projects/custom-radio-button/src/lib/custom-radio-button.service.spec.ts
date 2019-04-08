import { TestBed } from '@angular/core/testing';

import { CustomRadioButtonService } from './custom-radio-button.service';

describe('CustomRadioButtonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomRadioButtonService = TestBed.get(CustomRadioButtonService);
    expect(service).toBeTruthy();
  });
});
