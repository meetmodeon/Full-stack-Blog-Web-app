import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatChipGrid, MatChipInput, MatChipRow, MatChipsModule} from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { CommonModule } from '@angular/common';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-create-post',
  imports: [
    FormsModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatChipGrid,
    MatChipRow,
    MatChipInput,
    MatChipsModule,
    CommonModule
  ],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss'
})
export class CreatePostComponent {

  postForm!: FormGroup;
  tags:string[]=[];
  readonly separatorKeysCodes = [ENTER, COMMA] as const;


  constructor(private fb:FormBuilder,
    private router:Router,
    private snackBar:MatSnackBar,
    private postService:PostService
  ){}

  ngOnInit(){
    this.postForm=this.fb.group({
      name: [null,Validators.required],
      content: [null,[Validators.required,Validators.maxLength(5000)]],
      img: [null,Validators.required],
      postedBy:[null,Validators.required]
    })
  }

  add(event:any){
    const value=(event.value || '').trim();
    if(value){
      this.tags.push(value);
    }
    if(event.input){
      event.input.value='';
    }
  }
  remove(tag:any){
    const index=this.tags.indexOf(tag);

    if(index>=0){
      this.tags.splice(index,1);
    }
  }
  createPost(){
    const data= this.postForm.value;
    data.tags=this.tags;

    this.postService.createNewPost(data).subscribe(res=>{
      this.snackBar.open("Post Created Successfully !!!!","Ok");
      this.router.navigateByUrl("/");
    },error=>{
      this.snackBar.open("Something went wrong!!!!!","Ok");
    })
  }
}
