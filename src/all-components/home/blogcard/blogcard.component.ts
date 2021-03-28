import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-blogcard',
  templateUrl: './blogcard.component.html',
  styleUrls: ['./blogcard.component.css'],
  
})
export class BlogcardComponent implements OnInit {

  @Input() blogs:any;

  constructor(private router:Router){}

  ngOnInit(): void {
    
  }

  onClick(id:number,category:string){
    this.router.navigate(["explore",category,id]);
  }


}
