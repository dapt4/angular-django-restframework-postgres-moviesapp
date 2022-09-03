import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DeleteMovieService {


  constructor(private http: HttpClient) { }

  deleteMovie(id:number){
    var deleteUrl = `http://localhost:8000/movie/${id}`;
    this.http.delete(deleteUrl).subscribe(data => {
      console.log(data)
    })
  }
}
