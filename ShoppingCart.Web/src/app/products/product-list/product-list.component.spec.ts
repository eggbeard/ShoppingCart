import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { INITIAL_STATE, AppState } from '../../store/store';
import { StoreModule, Store } from '@ngrx/store';

import * as entities from '../../store/entities.state';
import { LoadProducts } from '../product.actions';
import { Product } from '../product';
import { AddProductToCart } from '../../cart/store/cart.actions';
import { AddManyProductEntities } from '../entities/product-entities.action';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          entities: entities.reducers
        },
        { initialState: INITIAL_STATE })
      ],
      declarations: [ ProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('Should dispatch a LoadProducts Action', () => {
      const expected = new LoadProducts();

      component.ngOnInit();

      expect(store.dispatch).toHaveBeenCalledWith(expected);
    });

    it('Should retrieve store products', () => {
      const product1: Product = { id: 123, name: '', description: '', price: 20 };
      const product2: Product = { id: 3415, name: '', description: '', price: 20.23 };
      const product3: Product = { id: 7, name: '', description: '', price: 1.17 };
      const products = [product1, product2, product3];

      store.dispatch(new AddManyProductEntities(products));

      component.ngOnInit();

      expect(component.products).toEqual(products);
    });
  });

  describe('addToCart', () => {
    it('Should dispatch an AddProductToCart Action', () => {
      const product: Product = { id: 345, name: '', description: '', price: 20 };
      const expected = new AddProductToCart(product.id);

      component.addToCart(product);

      expect(store.dispatch).toHaveBeenCalledWith(expected);
    });
  });
});
