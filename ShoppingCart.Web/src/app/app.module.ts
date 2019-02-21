import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { getInitialState } from './store/store';

import { reducers } from './store/store.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './products/product.effects';
import { environment } from '../environments/environment.prod';

import { localStorageSync } from 'ngrx-store-localstorage';

import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { CheckOutModule } from './check-out/check-out.module';
import { ProductsModule } from './products/products.module';
import { OrderModule } from './order/order.module';

const storageConfig = {
  rehydrate : true,
  keys: ['entities', 'cart', 'order']
};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync(storageConfig)(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];


@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CheckOutModule,
    CartModule,
    OrderModule,
    ProductsModule,
    StoreModule.forRoot(
      reducers,
      {
        metaReducers,
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
