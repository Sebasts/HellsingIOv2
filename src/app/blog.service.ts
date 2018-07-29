import { Injectable } from '@angular/core';
import { Blog } from './blog';
import { DataPathwayService } from './data-pathway.service';
import { blogs } from './mock-blog';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class BlogService {

  constructor(private dataPathway: DataPathwayService) { }
  
  getBlogs():Observable<Blog[]>{
      this.dataPathway.add("Fetched blog ddata");

      return of(blogs) ;
  }
  
  getBlog(id: number): Observable<Blog>{
      this.dataPathway.add('Fetched blog with id : ${id}');
      
      return of(blogs.find(blog => blog.id === id));
  }

}
