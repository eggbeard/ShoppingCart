import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartMaintenanceComponent } from './cart-maintenance.component';

describe('CartMaintenanceComponent', () => {
  let component: CartMaintenanceComponent;
  let fixture: ComponentFixture<CartMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
