import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
    constructor(){}

    points=[12,85,12,59,63,4,63,54];
    products=[
      {
        id:1,
        name:'Aeroplane Mens Sports Runnning Shoes',
        description:'Care Instructions: Allow your pair of shoes to air and de-odorize at a regular basis, this also helps them retain their natural shape; use shoe bags to prevent any stains or mildew; dust any dry dirt from the surface using a clean cloth, do not use polish or shiner',
        brand:'nike',
        gender:'male',
        discount:105,
        category:'running',
        size:[6,7,8,9,10],
        color:['White', 'Black', 'Yellow'],
        price:1220,
        is_in_invemtory:false,
        items_left:30,
        imageURL:'https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/r/e/m/-original-imagsfdvuffvqx4x.jpeg?q=90&crop=true',
        slug:'nike-react-45'
      },
      {
        id:2,
        name:'Aeroplane Mens Sports Runnning Shoes',
        description:'Care Instructions: Allow your pair of shoes to air and de-odorize at a regular basis, this also helps them retain their natural shape; use shoe bags to prevent any stains or mildew; dust any dry dirt from the surface using a clean cloth, do not use polish or shiner',
        brand:'nike',
        gender:'male',
        category:'running',
        discount:150,
        size:[6,7,8,9,10],
        color:['White', 'Black', 'Yellow'],
        price:1220,
        is_in_invemtory:true,
        items_left:30,
        imageURL:'https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/r/e/m/-original-imagsfdvuffvqx4x.jpeg?q=90&crop=true',
        slug:'nike-react-45'
      },
      {
        id:3,
        name:'Aeroplane Mens Sports Runnning Shoes',
        description:'Care Instructions: Allow your pair of shoes to air and de-odorize at a regular basis, this also helps them retain their natural shape; use shoe bags to prevent any stains or mildew; dust any dry dirt from the surface using a clean cloth, do not use polish or shiner',
        brand:'nike',
        gender:'male',
        category:'running',
        size:[6,7,8,9,10],
        color:['White', 'Black', 'Yellow'],
        price:1220,
        is_in_invemtory:false,
        items_left:30,
        imageURL:'https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/r/e/m/-original-imagsfdvuffvqx4x.jpeg?q=90&crop=true',
        slug:'nike-react-45'
      },
      {
        id:4,
        name:'Aeroplane Mens Sports Runnning Shoes',
        description:'Care Instructions: Allow your pair of shoes to air and de-odorize at a regular basis, this also helps them retain their natural shape; use shoe bags to prevent any stains or mildew; dust any dry dirt from the surface using a clean cloth, do not use polish or shiner',
        brand:'nike',
        gender:'male',
        category:'running',
        discount:215,
        size:[6,7,8,9,10],
        color:['White', 'Black', 'Yellow'],
        price:1220,
        is_in_invemtory:false,
        items_left:30,
        imageURL:'https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/r/e/m/-original-imagsfdvuffvqx4x.jpeg?q=90&crop=true',
        slug:'nike-react-45'
      },
      {
        id:5,
        name:'Aeroplane Mens Sports Runnning Shoes',
        description:'Care Instructions: Allow your pair of shoes to air and de-odorize at a regular basis, this also helps them retain their natural shape; use shoe bags to prevent any stains or mildew; dust any dry dirt from the surface using a clean cloth, do not use polish or shiner',
        brand:'nike',
        gender:'male',
        category:'running',
        size:[6,7,8,9,10],
        color:['White', 'Black', 'Yellow'],
        price:1220,
        is_in_invemtory:true,
        items_left:30,
        imageURL:'https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/r/e/m/-original-imagsfdvuffvqx4x.jpeg?q=90&crop=true',
        slug:'nike-react-45'
      },
      {
        id:6,
        name:'Aeroplane Mens Sports Runnning Shoes',
        description:'Care Instructions: Allow your pair of shoes to air and de-odorize at a regular basis, this also helps them retain their natural shape; use shoe bags to prevent any stains or mildew; dust any dry dirt from the surface using a clean cloth, do not use polish or shiner',
        brand:'nike',
        gender:'male',
        category:'running',
        discount:360,
        size:[6,7,8,9,10],
        color:['White', 'Black', 'Yellow'],
        price:1220,
        is_in_invemtory:false,
        items_left:30,
        imageURL:'https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/r/e/m/-original-imagsfdvuffvqx4x.jpeg?q=90&crop=true',
        slug:'nike-react-45'
      },
      {
        id:7,
        name:'Aeroplane Mens Sports Runnning Shoes',
        description:'Care Instructions: Allow your pair of shoes to air and de-odorize at a regular basis, this also helps them retain their natural shape; use shoe bags to prevent any stains or mildew; dust any dry dirt from the surface using a clean cloth, do not use polish or shiner',
        brand:'nike',
        gender:'male',
        category:'running',
        discount:450,
        size:[6,7,8,9,10],
        color:['White', 'Black', 'Yellow'],
        price:1220,
        is_in_invemtory:true,
        items_left:30,
        imageURL:'https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/r/e/m/-original-imagsfdvuffvqx4x.jpeg?q=90&crop=true',
        slug:'nike-react-45'
      },
      {
        id:8,
        name:'Aeroplane Mens Sports Runnning Shoes',
        description:'Care Instructions: Allow your pair of shoes to air and de-odorize at a regular basis, this also helps them retain their natural shape; use shoe bags to prevent any stains or mildew; dust any dry dirt from the surface using a clean cloth, do not use polish or shiner',
        brand:'nike',
        gender:'male',
        discount:123,
        category:'running',
        size:[6,7,8,9,10],
        color:['White', 'Black', 'Yellow'],
        price:1220,
        is_in_invemtory:true,
        items_left:30,
        imageURL:'https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/r/e/m/-original-imagsfdvuffvqx4x.jpeg?q=90&crop=true',
        slug:'nike-react-45'
      },
      {
        id:9,
        name:'Aeroplane Mens Sports Runnning Shoes',
        description:'Care Instructions: Allow your pair of shoes to air and de-odorize at a regular basis, this also helps them retain their natural shape; use shoe bags to prevent any stains or mildew; dust any dry dirt from the surface using a clean cloth, do not use polish or shiner',
        brand:'nike',
        gender:'male',
        discount:458,
        category:'running',
        size:[6,7,8,9,10],
        color:['White', 'Black', 'Yellow'],
        price:1220,
        is_in_invemtory:true,
        items_left:30,
        imageURL:'https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/r/e/m/-original-imagsfdvuffvqx4x.jpeg?q=90&crop=true',
        slug:'nike-react-45'
      },
      {
        id:10,
        name:'Aeroplane Mens Sports Runnning Shoes',
        description:'Care Instructions: Allow your pair of shoes to air and de-odorize at a regular basis, this also helps them retain their natural shape; use shoe bags to prevent any stains or mildew; dust any dry dirt from the surface using a clean cloth, do not use polish or shiner',
        brand:'nike',
        gender:'male',
        category:'running',
        size:[6,7,8,9,10],
        color:['White', 'Black', 'Yellow'],
        price:1220,
        is_in_invemtory:true,
        items_left:30,
        imageURL:'https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/r/e/m/-original-imagsfdvuffvqx4x.jpeg?q=90&crop=true',
        slug:'nike-react-45'
      },
      {
        id:11,
        name:'Aeroplane Mens Sports Runnning Shoes',
        description:'Care Instructions: Allow your pair of shoes to air and de-odorize at a regular basis, this also helps them retain their natural shape; use shoe bags to prevent any stains or mildew; dust any dry dirt from the surface using a clean cloth, do not use polish or shiner',
        brand:'nike',
        gender:'male',
        discount:100,
        category:'running',
        size:[6,7,8,9,10],
        color:['White', 'Black', 'Yellow'],
        price:1220,
        is_in_invemtory:false,
        items_left:30,
        imageURL:'https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/r/e/m/-original-imagsfdvuffvqx4x.jpeg?q=90&crop=true',
        slug:'nike-react-45'
      },
      {
        id:12,
        name:'Aeroplane Mens Sports Runnning Shoes',
        description:'Care Instructions: Allow your pair of shoes to air and de-odorize at a regular basis, this also helps them retain their natural shape; use shoe bags to prevent any stains or mildew; dust any dry dirt from the surface using a clean cloth, do not use polish or shiner',
        brand:'nike',
        gender:'male',
        discount:100,
        category:'running',
        size:[6,7,8,9,10],
        color:['White', 'Black', 'Yellow'],
        price:1220,
        is_in_invemtory:false,
        items_left:30,
        imageURL:'https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/r/e/m/-original-imagsfdvuffvqx4x.jpeg?q=90&crop=true',
        slug:'nike-react-45'
      },
      {
        id:13,
        name:'Aeroplane Mens Sports Runnning Shoes',
        description:'Care Instructions: Allow your pair of shoes to air and de-odorize at a regular basis, this also helps them retain their natural shape; use shoe bags to prevent any stains or mildew; dust any dry dirt from the surface using a clean cloth, do not use polish or shiner',
        brand:'nike',
        gender:'male',
        discount:100,
        category:'running',
        size:[6,7,8,9,10],
        color:['White', 'Black', 'Yellow'],
        price:1220,
        is_in_invemtory:false,
        items_left:30,
        imageURL:'https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/r/e/m/-original-imagsfdvuffvqx4x.jpeg?q=90&crop=true',
        slug:'nike-react-45'
      },
      {
        id:14,
        name:'Aeroplane Mens Sports Runnning Shoes',
        description:'Care Instructions: Allow your pair of shoes to air and de-odorize at a regular basis, this also helps them retain their natural shape; use shoe bags to prevent any stains or mildew; dust any dry dirt from the surface using a clean cloth, do not use polish or shiner',
        brand:'nike',
        gender:'male',
        discount:100,
        category:'running',
        size:[6,7,8,9,10],
        color:['White', 'Black', 'Yellow'],
        price:1220,
        is_in_invemtory:false,
        items_left:30,
        imageURL:'https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/r/e/m/-original-imagsfdvuffvqx4x.jpeg?q=90&crop=true',
        slug:'nike-react-45'
      },
    ];

    totalProductCount = this.products.length;
    totalProductInstack = this.products.filter(p=> p.is_in_invemtory === true).length;
    totalProductOutOfStack = this.products.filter(p=> p.is_in_invemtory !== true).length;

    selectedFilterRadioButton :string = 'all';

      onFilterChange(value:any){
        debugger
      this.selectedFilterRadioButton = value;
      console.log(value);
    }
    searchProduct:string ='';
}
