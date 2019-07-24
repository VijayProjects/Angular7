import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesdataService } from '../coursesdata.service';

@Component({
  selector: 'app-coursepreview',
  templateUrl: './coursepreview.component.html',
  styleUrls: ['./coursepreview.component.css']
})
export class CoursepreviewComponent implements OnInit {
  public courseId;
  public courses = [];
  constructor(private activedRoute: ActivatedRoute, private data: CoursesdataService) { }

  ngOnInit() {
    this.courseId = this.activedRoute.snapshot.paramMap.get('id');
    this.courses = this.data.getCourseData();
  }

}
