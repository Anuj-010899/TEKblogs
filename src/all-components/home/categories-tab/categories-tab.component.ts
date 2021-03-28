import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/shared/services/categories.service';

@Component({
  selector: 'app-categories-tab',
  templateUrl: './categories-tab.component.html',
  styleUrls: ['./categories-tab.component.css'],
  providers:[CategoryService]
})
export class CategoriesTabComponent implements OnInit {
  categories: string[] =[];


  constructor(private categoryService:CategoryService,private routerService:Router) { }

  ngOnInit(): void {
    this.categories=this.categoryService.categories.slice(0,4);
  }

  categorySelected(category:string){
    this.routerService.navigate(["explore",category])
  }
}
