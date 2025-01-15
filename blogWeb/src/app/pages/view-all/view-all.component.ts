import { Component } from '@angular/core';
import { PostService } from '../service/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { error } from 'console';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatGridList} from '@angular/material/grid-list'
import { MatGridTile } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-all',
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatGridList,
    MatGridTile,
    RouterModule,


  ],
  templateUrl: './view-all.component.html',
  styleUrl: './view-all.component.scss'
})
export class ViewAllComponent {

  allPosts:any;

  constructor(private postService: PostService,
    private snackBar: MatSnackBar
  ){}
  ngOnInit(){
    this.getAllPosts();
  }
  getAllPosts(){
    this.postService.getAllPosts().subscribe(res=>{
      console.log(res);
      this.allPosts=res;
    },error=>{
      this.snackBar.open("Something went wrong!!!!","Ok");
    })
  }
}
