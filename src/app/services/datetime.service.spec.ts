/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DatetimeService } from './datetime.service';

describe('DatetimeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatetimeService]
    });
  });

  it('should ...', inject([DatetimeService], (service: DatetimeService) => {
    expect(service).toBeTruthy();
  }));
});
