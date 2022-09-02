import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListMoviesService {
  moviesUrl = 'http://localhost:8000/movie'
  constructor(private http: HttpClient) { }

  getMovies(){
    return this.http.get(this.moviesUrl)
  }
}
