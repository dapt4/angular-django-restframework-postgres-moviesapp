import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetDataServiceService {


  constructor(private http: HttpClient) { }

  getData(id:string){
    let baseUrl: string = `http://localhost:8000/movie/${id}`;
    return this.http.get(baseUrl);
  }
}
