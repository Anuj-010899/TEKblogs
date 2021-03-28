import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/shared/services/blog.service';

@Component({
  selector: 'app-blogs-by-category',
  templateUrl: './blogs-by-category.component.html',
  styleUrls: ['./blogs-by-category.component.css'],
  providers: [BlogService]
})
export class BlogsByCategoryComponent implements OnInit {
  category: string = "";
  blogs: any;
  searchField: string = "category";
  results: any;
  selectedBlogCategory: string = "";
  selectedBlogCategoryID: number = 0;
  // searchedBlogs:Set<{}>=new Set();
  searchedBlogs:any[]=[];
  // vari:any;

  constructor(private route: ActivatedRoute, private blogService: BlogService, private router: Router) { }

  ngOnInit(): void {
    this.category = this.route.snapshot.params.category;
    this.results = this.loadAllBlogs();

  }

  loadAllBlogs() {
    this.results = [];
    this.blogService.getBlogsBySingleProp(this.searchField, this.category).subscribe((response) => {
      this.results = response;
    })
    return this.results;
  }
  loadTheBlog(selectedBlog: any) {
    this.selectedBlogCategory = selectedBlog.category;
    this.selectedBlogCategoryID = selectedBlog.id;
    this.router.navigate(['/explore/', this.selectedBlogCategory, this.selectedBlogCategoryID]);
  }

  searchBlogs(el:string){
    this.searchedBlogs=[];

    this.results.forEach((element: { name: string,title:string }) => {
      if(element.name.toLowerCase().trim().includes(el.toLowerCase().trim()) || element.title.toLowerCase().includes(el.toLowerCase())){
        this.searchedBlogs.push(element);
      }
    });
  
    
  }
  backButton(){
    this.router.navigate(["explore"]);
  }

}









