import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../blog';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
    
    blogs: Blog[];
    
  constructor(private blogService: BlogService) {
  }

  ngOnInit() {
      this.blogService.getBlogs().subscribe(blogsData => this.blogs = blogsData);
      console.log(this.blogs);

  }

}
