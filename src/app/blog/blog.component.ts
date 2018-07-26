import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import {BlogService} from '../blog.service';
@Component( {
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css']
} )
export class BlogComponent implements OnInit {
    activeBlog: Blog;
    blogs: Blog[];
    
    constructor(private blogService: BlogService) {
        
    }

    ngOnInit() {
        this.getBlogs();    
    }
    
    activateBlog(blog:Blog): void{
        this.activeBlog = blog;
    }
    
    getBlogs(): void{
        this.blogs = this.blogService.getBlogs();
    }
}
