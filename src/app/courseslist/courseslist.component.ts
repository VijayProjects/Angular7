import { Component, OnInit } from '@angular/core';
import { CoursesdataService } from '../coursesdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courseslist',
  templateUrl: './courseslist.component.html',
  styleUrls: ['./courseslist.component.css']
})
export class CourseslistComponent implements OnInit {
  public courses = [];
  constructor(private router: Router, private data: CoursesdataService) { }

  ngOnInit() {
    this.courses = this.data.getCourseData();
  }
  public viewCourseDetals(course) {
    this.router.navigate(['courses', course.courseId]);
  }

}
