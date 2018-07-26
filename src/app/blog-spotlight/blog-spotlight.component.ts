import { Component, OnInit, Input } from '@angular/core';
import { Blog } from '../blog'

@Component({
  selector: 'app-blog-spotlight',
  templateUrl: './blog-spotlight.component.html',
  styleUrls: ['./blog-spotlight.component.css']
})

export class BlogSpotlightComponent implements OnInit {
@Input() blog:Blog;
   
   
  constructor() { }

  ngOnInit() {
  }

}
