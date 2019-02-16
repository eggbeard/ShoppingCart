import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { CartModule } from './cart/cart.module';
import { NavComponent } from './nav/nav.component';
import { getInitialState } from './store/store';

import { reducers } from './store/store.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './products/product.effects';
import { environment } from '../environments/environment.prod';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { OrderSummaryComponent } from './order/order-summary/order-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CheckOutComponent,
    NavComponent,
    OrderSummaryComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CartModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, 
      { 
        initialState: getInitialState 
      }
    ),
    EffectsModule.forRoot([ProductEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 100,
      logOnly: environment.production
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }