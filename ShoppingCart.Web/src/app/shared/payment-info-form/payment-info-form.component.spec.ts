import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentInfoFormComponent } from './payment-info-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('PaymentInfoFormComponent', () => {
  let component: PaymentInfoFormComponent;
  let fixture: ComponentFixture<PaymentInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ PaymentInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
