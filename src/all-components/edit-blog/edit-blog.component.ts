import { Component, ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BlogService } from 'src/shared/services/blog.service';
import { CategoryService } from 'src/shared/services/categories.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css'],
  providers: [BlogService,CategoryService]
})
export class EditBlogComponent implements OnInit {

  categories:string[]=[];

  blogObj: any = {
    name: "",
    email: "",
    title: "",
    category: "",
    img: "",
    inputContent: "",
    id: ""
  }


  category:string="";
  id: number = 0;


  constructor(private blogService: BlogService, private route: ActivatedRoute,private router:Router,private categoryService:CategoryService) { }


  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.category=this.route.snapshot.params['category'];
    this.blogService.getBlogsBySingleProp('id', this.id.toString()).subscribe((response) => {
      this.blogObj = response;
    });
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.category = params['category'];
      this.blogService.getBlogsBySingleProp('id', this.id.toString()).subscribe((response) => {
        this.blogObj = response;
        
      });

    });

    this.categories=this.categoryService.categories;
    this.categories=this.categories.slice(0,this.categories.length-1);

  }

  updateBlog() {
    this.blogService.updateBlog(this.blogObj).subscribe(() => {
      this.blogService.getAllBlogs().subscribe();
    });
    alert("Your Blog is Updated Successfully");
    this.router.navigate(["home"]);

  }
  backButton(){
    this.router.navigate(["explore",this.category,this.id]);
  }

}
