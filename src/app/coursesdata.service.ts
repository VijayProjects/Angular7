import { Injectable } from '@angular/core';

@Injectable()
export class CoursesdataService {
  public coursesData = [];
  constructor() { }

  public getCourseData() {
    this.coursesData = [
      {courseId: 100, courseName: 'Angular7', fee: 2500, faculty: 'Sharma', photo: 'assets/sh.jpg'},
      {courseId: 101, courseName: 'Core Java', fee: 1000, faculty: 'Harikrishna', photo: 'assets/hk.jpg'},
      {courseId: 103, courseName: 'WebServices', fee: 1200, faculty: 'Ashok', photo: 'assets/ak.jpg'},
      {courseId: 104, courseName: 'Spring', fee: 1500, faculty: 'Nataraz', photo: 'assets/nt.jpg'}
    ];
    return this.coursesData;
  }
}
