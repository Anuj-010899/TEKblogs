import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/shared/services/blog.service';
// import { BlogsService } from 'src/shared/services/blogs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[BlogService]
})
export class HomeComponent implements OnInit {
  blogs:any;
  constructor(private blogService:BlogService) { }

  ngOnInit(): void {
    
    this.blogService.getAllBlogs().subscribe((response)=>{     
      this.blogs=(response);
      this.blogs=this.blogs.slice(0,4);
    });
  }

}
