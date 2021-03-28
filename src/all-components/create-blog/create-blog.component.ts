import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/shared/services/blog.service';
import { CategoryService } from 'src/shared/services/categories.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css'],
  providers:[BlogService,CategoryService]
})
export class CreateBlogComponent implements OnInit {

  categories:string[]=[];

  constructor(private blogService:BlogService,private route:Router,private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categories= this.categoryService.categories;
    this.categories=this.categories.slice(0,this.categories.length-1);
  }

  createBlog(blogObj:ElementRef){
    this.blogService.createBlog(blogObj).subscribe();
    alert("Yipee!! Your Blog Has Been Posted Successfuly");
    this.route.navigate(["home"]);
  }
  backButton(){
    this.route.navigate(["home"]);
  }
}
