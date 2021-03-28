import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/shared/services/blog.service';


@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.css']
})
export class SingleBlogComponent implements OnInit {

  constructor(private route:ActivatedRoute,private blogService:BlogService,private router:Router) { }

  category:string="";
  id:number=0;
  result:any;

   

  ngOnInit(): void {
    this.category=(this.route.snapshot.params.category);
    this.id=(this.route.snapshot.params.id);
    this.blogService.getBlogsByCategoryandID(this.category,this.id).subscribe((response)=>{      
      this.result=response;
      
    });
    

  }
  onEdit(currentResult: any){
    this.router.navigate(["/explore",currentResult.category,currentResult.id,"edit"]);
  }
  onDelete(currentResult: any){
    if(window.confirm("Are you sure you wanna delete this blog?")){
      this.blogService.deleteBlog(currentResult.id).subscribe(()=>{
        this.blogService.getAllBlogs().subscribe();
      });
      alert("Your Blog Is now Deleted....");
      this.router.navigate(["home"]);
    }
  }

  backButton(category:string){
    this.router.navigate(["explore",category]);
  }

}
