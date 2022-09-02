import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ActivatedRoute } from '@angular/router'
import {GetDataServiceService} from './get-data-service.service';
import {SaveService} from './save.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  movieId: string = '';
  formdata = new FormData();
  movieData: any = {
    title: '',
    description: '',
    year: '',
    image: '',
  };
  
  constructor(
    private route: ActivatedRoute,
    private getDataS: GetDataServiceService, 
    private saveService: SaveService
  ) { }

  ngOnInit(): void {
    this.getId()
    this.getData(this.movieId)
  }

  getId(){
    this.route.params.subscribe(params=>{
      this.movieId = params['id']
    })
  }

  getData(id: string){
    this.getDataS.getData(id).subscribe(data => {
      this.movieData = data;
    })
  }

  onInput(event:any){
    this.formdata.append(event.target.name, event.target.value)
  }

  upload(event:any){
    this.formdata.append("image", event.target.files[0])
  }

  saveData(f:NgForm){
    this.saveService.save(this.movieId, this.formdata).subscribe(data=>{
      console.log(data)
      window.location.href = '/';
    })
  }

}
