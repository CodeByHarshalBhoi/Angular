import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchProduct='';
  constructor(){}

  getInputData(data:any){
      this.searchProduct = data.target.value
  }
}
