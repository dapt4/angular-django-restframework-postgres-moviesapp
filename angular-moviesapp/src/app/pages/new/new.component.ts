import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { CreateMovieService } from './create-movie.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  formdata = new FormData()

  constructor(private createMovieService: CreateMovieService, private router : Router) { }

  ngOnInit(): void {
  }

  upload(event:any){
    this.formdata.append("image", event.target.files[0])
  }

  onInput(event:any){
    this.formdata.append(event.target.name, event.target.value)
  }

  onSubmit(f:NgForm){
    this.createMovieService.postMovie(this.formdata).subscribe(data => console.log(data)) 
    window.location.href = "/"; // this.router.navigate(['/'])
  }

}
