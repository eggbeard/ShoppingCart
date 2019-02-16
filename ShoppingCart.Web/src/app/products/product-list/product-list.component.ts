import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store/store';
import { getAllProducts } from '../entities/product-entity.selectors';
import { LoadProducts } from '../product.actions';
import { AddProductToCart } from '../../cart/store/cart.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Doggie Products';
  errorMessage: string;
  products: Product[] = [];

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.pipe(
      select(getAllProducts)
    ).subscribe(
      (products: Product[]) => {
        this.products = products
      },
      (err: any) => this.errorMessage = err.error
    );

    this.store.dispatch(new LoadProducts());
  }

  addToCart(product: Product): void {
    this.store.dispatch(new AddProductToCart(product.id));
  }
}
