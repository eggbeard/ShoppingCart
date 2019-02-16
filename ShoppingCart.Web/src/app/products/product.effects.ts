import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { ProductActionType, LoadProducts } from './product.actions';
import { ProductService } from './services/product.service';
import { mergeMap, concatMap, catchError, tap } from 'rxjs/operators';
import { AddManyProductEntities } from './entities/product-entities.action';
import { ApiRequestError, ApiRequestSuccess } from '../store/api.actions';

@Injectable()
 export class ProductEffects {
  constructor(
    private actions: Actions,
    private productService: ProductService
  ) {}

  @Effect()
  loadProducts: Observable<Action> = this.actions.pipe(
    ofType<LoadProducts>(ProductActionType.LOAD_PRODUCTS),
    mergeMap(request => this.productService.getProducts()
      .pipe(
        tap(products => console.log(`there are ${products.length} products`)),
        concatMap(products => [
          new AddManyProductEntities(products),
          new ApiRequestSuccess()
        ]),
        catchError(error => of(new ApiRequestError(error)))
      )
    )
  );

}