import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Address } from './Address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  @Output() changed: EventEmitter<Address> = new EventEmitter<Address>();
  addressForm: FormGroup;

  constructor() { }

  get street() { return this.addressForm.get('street'); }
  get city() { return this.addressForm.get('city'); }
  get state() { return this.addressForm.get('state'); }
  get zip() { return this.addressForm.get('zip'); }

  ngOnInit() {
    this.addressForm = new FormGroup({
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', [Validators.required, Validators.minLength(2)]),
      zip: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    const {street, city, state, zip} = this.addressForm.value;
    const address : Address = {street, city, state, zip};
    this.changed.emit(address);
  }

}
