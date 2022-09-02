import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateMovieService {
  baseUrl = 'http://localhost:8000/movie';
  constructor(private http: HttpClient) { }

  postMovie(movie: FormData){
    return this.http.post(this.baseUrl, movie)
  }
}
