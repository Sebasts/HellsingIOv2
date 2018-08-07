import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Blog } from '../blog'
import { BlogService } from '../blog.service';
@Component( {
    selector: 'app-blog-spotlight',
    templateUrl: './blog-spotlight.component.html',
    styleUrls: ['./blog-spotlight.component.css']
} )

export class BlogSpotlightComponent implements OnInit {
    @Input() blog: Blog;
    
    blogIdParam: string = "id";


    constructor(
        private blogService: BlogService,
        private route: ActivatedRoute,
        private location: Location ) { }

    ngOnInit() {
        this.getHero();
        var pig = this.blogService.getBlogs().subscribe(function(pong){
            console.log(pong);
        });
    }
    
    getHero(){
        const id = +this.route.snapshot.paramMap.get(this.blogIdParam);
 //       this.blogService.getBlog(id).subscribe(blog => this.blog = blog);
    }
    
    goBack(): void {
        this.location.back();
      }
}
