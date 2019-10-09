import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
  it('count skills', () => {
    const service: AuthService = TestBed.get(AuthService);
   const obj=service.getAllSkills();
    expect(obj).toBeDefined();
  });
});
