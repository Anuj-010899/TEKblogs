import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CreateBlogComponent } from '../all-components/create-blog/create-blog.component';


import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { EditBlogComponent } from '../all-components/edit-blog/edit-blog.component';
import { CarouselComponent } from 'src/all-components/home/carousel/carousel.component';
import { BlogcardComponent } from 'src/all-components/home/blogcard/blogcard.component';
import { HomeComponent } from 'src/all-components/home/home.component';
import { ExploreComponent } from 'src/all-components/explore/explore.component';
import { BlogsByCategoryComponent } from 'src/all-components/explore/blogs-by-category/blogs-by-category.component';
import { SingleBlogComponent } from 'src/all-components/explore/single-blog/single-blog.component';
import { CategoriesTabComponent } from '../all-components/home/categories-tab/categories-tab.component';
import { ConfirmationComponent } from '../all-components/confirmation/confirmation.component';
import { ContactComponent } from 'src/all-components/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    BlogcardComponent,
    FooterComponent,
    CreateBlogComponent,
    HomeComponent,
    ExploreComponent,
    BlogsByCategoryComponent,
    SingleBlogComponent,
    EditBlogComponent,
    CategoriesTabComponent,
    ConfirmationComponent,
    ContactComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
