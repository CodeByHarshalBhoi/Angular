import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
  constructor(){}
          Name:string = 'Iphone';
          Color:string='Black';
          Price:number= 19999

          PhoneType:string = 'iphone 14'
          product={
                Name : 'Iphone',
                Color:'Black',
                Price: 19999,
                Discount: 8.9,
                Stock:10,
                pImage:"https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-14-pro-max-colors.png",
                addToCart:0
          }

          getDiscount(){
            return this.product.Price - (this.product.Price * this.product.Discount/100);
          }
          getValue(event:any){
            this.PhoneType = event.target.value
          }
          incrementCartValue(){
            if(this.product.addToCart < this.product.Stock){
               this.product.addToCart ++
            }

          }
          decrementCartValue(){
            if(this.product.addToCart > 0){
              this.product.addToCart --
            }

          }
}
