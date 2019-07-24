import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CoursesdataService } from '../coursesdata.service';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {
  public courseId;
  public courses = [];
  constructor(private activedRoute: ActivatedRoute, private router: Router, private data: CoursesdataService) { }

  ngOnInit() {
   this.courseId = this.activedRoute.snapshot.paramMap.get('id');
   this.courses = this.data.getCourseData();
  }

  public viewPreview() {
    this.router.navigate(['coursePreview', this.courseId], {relativeTo: this.activedRoute});
  }

}
