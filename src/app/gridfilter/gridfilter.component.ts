import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-gridfilter',
  templateUrl: './gridfilter.component.html',
  styleUrls: ['./gridfilter.component.css']
})
export class GridfilterComponent implements OnInit {
  public selectedValue = 'All';

  // create decorators
  @Input() public allCount = 0;
  @Input() public electsCount = 0;
  @Input() public shoesCount = 0;
  @Output() public categoryChanged: EventEmitter<string> = new EventEmitter<string>();
 
  public onCategoryChanged() {
    this.categoryChanged.emit(this.selectedValue);
  }

  constructor() { }

  ngOnInit() {
  }

}
