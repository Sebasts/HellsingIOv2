import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  blogs: Blog[] = [];
    
  constructor(private blogService: BlogService) { }

  ngOnInit() {
      this.getBlogs();
  }
  
  getBlogs():void{
 //     this.blogService.getBlogs().subscribe(blogs => this.blogs = blogs);
  }

}
