import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input()all:number=0;
  @Input()inStack:number=0;
  @Input()outOfStack:number=0;


  @Output() selectedFilterRdioButtonChnage:EventEmitter<string>= new EventEmitter<string>();

  selectedFilterRadioButton:string='all';

  onSelectedFilterRadioButtonChange(){
    console.log(this.selectedFilterRadioButton);
    this.selectedFilterRdioButtonChnage.emit(this.selectedFilterRadioButton);
    console.log(this.selectedFilterRadioButton);
  }
}
