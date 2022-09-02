import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SaveService {

  constructor(private http: HttpClient) { }

  save(id:string, movie: FormData){
    let baseUrl = `http://localhost:8000/movie/${id}`
    return this.http.put(baseUrl, movie)
  }

}
