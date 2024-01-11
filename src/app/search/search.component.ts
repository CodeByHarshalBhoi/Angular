import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchProduct='';
  constructor(){}

  @ViewChild('searchInputText') searchInputTextEl:ElementRef;

 @Output() searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

 onSearchTextChanges(){
  this.searchTextChanged.emit(this.searchProduct)
 }
  getInputData(data:any){
      this.searchProduct = data.target.value
  }
  setSearchText(inputVal:any){
    console.log(inputVal.value);
    this.searchProduct = inputVal.value
    this.searchTextChanged.emit(this.searchProduct)
    // this.searchProduct = inputVal.target.value
  }
}
