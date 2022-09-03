import { TestBed } from '@angular/core/testing';

import { CreateMovieService } from './create-movie.service';

describe('CreateMovieService', () => {
  let service: CreateMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
