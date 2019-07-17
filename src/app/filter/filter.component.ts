import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent  {

  public selectedCategoryValue = 'All';
  @Output() public categoryChanged: EventEmitter<string> =
  new EventEmitter<string>();

  public onCategoryChanged() {
    this.categoryChanged.emit(this.selectedCategoryValue);
  }
}
