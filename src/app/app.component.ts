import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'procademy';


    constructor(){};

@ViewChild('inputEl') inputElel:ElementRef
    getdata(){
      console.log(this.inputElel.nativeElement.value);
    }

fullName:string='';
    @ViewChildren('inputChildren') inputChildrenEl:QueryList<ElementRef>
    getChildrenData(){
      let name = '';
      this.inputChildrenEl.forEach((el)=>{
        name += el.nativeElement.value + ' '
      });
      this.fullName =  name.trim()
    }
}
