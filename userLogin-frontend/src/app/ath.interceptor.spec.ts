import { TestBed } from '@angular/core/testing';

import { AthInterceptor } from './ath.interceptor';

describe('AthInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AthInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AthInterceptor = TestBed.inject(AthInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
