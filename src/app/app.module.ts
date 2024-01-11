import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DirectivesComponent } from './directives/directives.component';
import { ProductComponent } from './directives/product/product.component';
import { FilterComponent } from './directives/filter/filter.component';
import { ProductDetailComponent } from './directives/product-detail/product-detail.component';
import { ProductDetail1Component } from './directives/product-detail1/product-detail1.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    SearchComponent,
    DirectivesComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailComponent,
    ProductDetail1Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
