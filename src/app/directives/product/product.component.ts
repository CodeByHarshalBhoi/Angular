import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(){}

  @Input() product:{
                      name:string,
                      id:number
                      description:string
                      brand:string
                      gender:string
                      category:string
                      discount?:number
                      size:number[]
                      color:string[]
                      price:number
                      is_in_invemtory:boolean
                      items_left:number
                      imageURL:string
                      slug:string
                      }=undefined
}
