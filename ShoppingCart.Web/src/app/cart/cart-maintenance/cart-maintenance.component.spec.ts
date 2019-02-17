import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartMaintenanceComponent } from './cart-maintenance.component';
import { StoreModule, Store } from '@ngrx/store';
import { INITIAL_STATE, AppState } from '../../store/store';

import * as cart from '../store/cart.reducer';
import * as entities from '../../store/entities.state';

describe('CartMaintenanceComponent', () => {
  let component: CartMaintenanceComponent;
  let fixture: ComponentFixture<CartMaintenanceComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        StoreModule.forRoot({ 
          entities: entities.reducers,
          cart: cart.reducer
        }, 
        { initialState: INITIAL_STATE })
      ],
      declarations: [ CartMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
