import { Component } from '@angular/core';
import { PostService } from '../service/post.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { error } from 'console';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatChip, MatChipSet } from '@angular/material/chips';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommentService } from '../../service/comment.service';
import { MatFormField, MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-view-post',
  imports: [
     CommonModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatChipSet,
        MatChip,
        RouterModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormField,

  ],
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.scss'
})
export class ViewPostComponent {
  postId:any;

  postData:any;
  commentForm!: FormGroup;
  comments:any;


  constructor(private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private snackBar:MatSnackBar,
    private fb:FormBuilder,
    private commentService:CommentService
  ){}
  
  ngOnInit(){
    const parmsId=this.activatedRoute.snapshot.params['id'];
    this.postId=parmsId?+parmsId:0;

    console.log(this.postId);
    this.getPostById();
    
    this.commentForm=this.fb.group({
      postedBy:[null,Validators.required],
      content:[null,Validators.required]
    })
  }

  publishComment(){
    const postedBy = this.commentForm.value.postedBy;
    const content = this.commentForm.value.content;

    this.commentService.createComment(this.postId,postedBy,content).subscribe(res=>{
      this.snackBar.open("Comment Published Successfully","Ok");
      this.getCommentsByPost();
    }, error=>{
      this.snackBar.open("Something Went Wrong!!!!","Ok");
    })
  }

  getPostById(){
    this.postService.getPostById(this.postId).subscribe(res=>{
      this.postData=res;
      console.log(this.postData);
      this.getCommentsByPost();
    },
  error=>{
    this.snackBar.open("Something went wrong !!!!","Ok");
  })
  }

  likePost(){
    this.postService.likePost(this.postId).subscribe(res=>{
      this.snackBar.open("Post Liked Successfull","Ok");
      this.getPostById();
    },(error)=>{
      this.snackBar.open("Something went wrong!!!!","Ok");
    })
  }
  getCommentsByPost(){
    this.commentService.getAllCommentsByPost(this.postId).subscribe(res=>{
      this.comments=res;
      
    },error=>{
      this.snackBar.open(
        "Something is wrong!!!","Ok"
      )
    })
  }

}
