import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchProduct='';
  constructor(){}

 @Output() searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

 onSearchTextChanges(){
  this.searchTextChanged.emit(this.searchProduct)
 }
  getInputData(data:any){
      this.searchProduct = data.target.value
  }
}
