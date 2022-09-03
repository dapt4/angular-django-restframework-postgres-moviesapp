import { TestBed } from '@angular/core/testing';

import { ListMoviesService } from './list-movies.service';

describe('ListMoviesService', () => {
  let service: ListMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
