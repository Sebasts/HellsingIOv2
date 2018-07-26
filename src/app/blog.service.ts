import { Injectable } from '@angular/core';
import { Blog } from './blog';
import { blogs } from './mock-blog';

@Injectable({
    providedIn: 'root',
})
export class BlogService {

  constructor() { }
  
  getBlogs():Blog[]{
      return blogs;
  }

}
