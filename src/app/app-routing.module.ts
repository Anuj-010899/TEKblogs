import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from 'src/all-components/contact/contact.component';

import { CreateBlogComponent } from 'src/all-components/create-blog/create-blog.component';
import { EditBlogComponent } from 'src/all-components/edit-blog/edit-blog.component';
import { BlogsByCategoryComponent } from 'src/all-components/explore/blogs-by-category/blogs-by-category.component';
import { ExploreComponent } from 'src/all-components/explore/explore.component';
import { SingleBlogComponent } from 'src/all-components/explore/single-blog/single-blog.component';
import { HomeComponent } from 'src/all-components/home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"explore",component:ExploreComponent},
  {path:"explore/:category",component:BlogsByCategoryComponent},
  {path:"explore/:category/:id",component:SingleBlogComponent},
  {path:"explore/:category/:id/edit",component:EditBlogComponent},
  {path:"create-blog",component:CreateBlogComponent},
  {path:"contact-us",component:ContactComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
