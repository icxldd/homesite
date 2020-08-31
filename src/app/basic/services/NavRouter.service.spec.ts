/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NavRouterService } from './NavRouter.service';

describe('Service: NavRouter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavRouterService]
    });
  });

  it('should ...', inject([NavRouterService], (service: NavRouterService) => {
    expect(service).toBeTruthy();
  }));
});
