import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/shared/services/blog.service';
import { CategoryService } from 'src/shared/services/categories.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
  providers: [BlogService,CategoryService]
})
export class ExploreComponent implements OnInit {

  // categories: string[] = ["Life Lessions", "Technology", "Humor", "Arts & Entertainment", "Culture", "Health", "Politics", "Industry"]

  categories:string[]=[];
  blogs: any;
  searchField: string = "category";
  results: any[] = [];

  constructor(private blogService: BlogService, private router: Router,private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.blogService.getAllBlogs().subscribe((response) => {
      this.blogs = response;
    });
    this.categories=this.categoryService.categories;
  }

  categorySelected(category: string) {
    // if(category=="All")
    this.router.navigate(['/explore', category]);
  }

  backButton(){
    this.router.navigate(["home"])
  }


}



















    // console.log(category);
    // console.log(this.blogs);
    // var type=typeof this.blogs;
    // console.log(this.blogs[0].title);
    // console.log(this.blogs.length);