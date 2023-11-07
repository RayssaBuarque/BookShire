import { TestBed } from '@angular/core/testing';

import { SetLivroService } from './set-livro.service';

describe('SetLivroService', () => {
  let service: SetLivroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetLivroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
