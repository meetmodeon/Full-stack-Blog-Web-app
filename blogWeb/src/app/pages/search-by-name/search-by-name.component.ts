import { Component } from '@angular/core';
import { PostService } from '../service/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { error } from 'console';
import { CommonModule } from '@angular/common';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { FormsModule, NgModel } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-search-by-name',
  imports: [
    CommonModule,
    MatFormField,
    MatInputModule,
    MatIcon,
    MatLabel,
    FormsModule,
    MatGridList,
        MatGridTile,
      RouterModule,
      MatCardModule,
    
  ],
  templateUrl: './search-by-name.component.html',
  styleUrl: './search-by-name.component.scss'
})
export class SearchByNameComponent {

  result:any=[];
  name:any='';
  
  constructor(private postService:PostService,
    private snackBar:MatSnackBar
  ){}

  searchByName(){
    this.postService.searchByName(this.name).subscribe(res=>{
      this.result=res;
      console.log(this.result);
    },error=>{
      this.snackBar.open("Something Went Wrong!!!","Ok")
    })
  }

}
