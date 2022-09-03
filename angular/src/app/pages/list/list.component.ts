import { Component, OnInit } from '@angular/core';
import { ListMoviesService } from './list-movies.service';
import { Movie } from './movieType'
import { Observable } from 'rxjs';
import {DeleteMovieService} from 'src/app/delete-movie.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public movies: any = [];

  constructor(
    private movieService: ListMoviesService,
    private deleteservice : DeleteMovieService
  ) {}
  

  getData(){
    this.movieService.getMovies().subscribe(data=>{
      this.movies = data
    })
  }

  ngOnInit(): void {
    this.getData()
  }

  deleteMovie(id:number){
    this.movies = this.movies.filter((e:any) => e.id !== id)
    this.deleteservice.deleteMovie(id)
  }

}
