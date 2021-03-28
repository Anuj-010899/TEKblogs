import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/shared/services/blog.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  blogs: any;
  zero:number=0;
  startIndex:number=0;
  max:number=0;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getAllBlogs().subscribe((response) => {
      this.blogs = response;
      this.max=this.blogs.length-1-3;
      this.startIndex=this.getRandomInt(this.zero,this.max);
      this.blogs = this.blogs.slice(this.startIndex, this.startIndex+3);
    })

  }

  getRandomInt(min:number,max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
