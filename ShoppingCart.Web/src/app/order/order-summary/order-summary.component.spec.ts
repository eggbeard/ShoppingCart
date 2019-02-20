import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSummaryComponent } from './order-summary.component';
import * as cart from '../../cart/store/cart.reducer';
import * as entities from '../../store/entities.state';
import * as order from '../../order/store/order.reducer';

import { StoreModule } from '@ngrx/store';
import { INITIAL_STATE } from '../../store/store';

describe('OrderSummaryComponent', () => {
  let component: OrderSummaryComponent;
  let fixture: ComponentFixture<OrderSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          entities: entities.reducers,
          cart: cart.reducer,
          order: order.reducer
        },
        { initialState: INITIAL_STATE })
      ],
      declarations: [ OrderSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
