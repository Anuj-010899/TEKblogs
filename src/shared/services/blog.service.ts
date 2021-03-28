import { HttpClient } from "@angular/common/http";
import { ElementRef, Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})
export class BlogService{
    constructor(private _http:HttpClient){}

    getAllBlogs(){
        return this._http.get("http://localhost:3000/blogs");
    }
    getBlogsBySingleProp(prop:string,propVal:string){
        if(propVal=="All" && prop=="category"){
            return this._http.get("http://localhost:3000/blogs");
        }
        return this._http.get("http://localhost:3000/blogs"+"?"+prop+"="+propVal);
    }
    getBlogsByCategoryandID(category:string,id:number){
        return this._http.get("http://localhost:3000/blogs"+"?"+"category"+"="+category+"&id="+id);

    }
    createBlog(blog:ElementRef){
        return this._http.post("http://localhost:3000/blogs",blog);
    }
    updateBlog(_blogObj: any){

        return this._http.put("http://localhost:3000/blogs/"+_blogObj[0].id,_blogObj[0]);

    }
    deleteBlog(id:any){
        console.log(id);
        return this._http.delete("http://localhost:3000/blogs/"+id.toString());
    }

}