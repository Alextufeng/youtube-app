import { TestBed } from '@angular/core/testing';

import { StartInterceptor } from './start.interceptor';

describe('StartInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      StartInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: StartInterceptor = TestBed.inject(StartInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
