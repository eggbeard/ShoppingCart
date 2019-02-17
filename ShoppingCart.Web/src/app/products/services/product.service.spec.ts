import { TestBed, async } from '@angular/core/testing';

import { ProductService } from './product.service';
import { MockHttpClient } from '../../../testing/http.mock';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('ProductService', () => {
  let httpClient: MockHttpClient = new MockHttpClient();
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[],
      providers:[{provide: HttpClient, useValue: httpClient}]
    }).compileComponents();

    service = TestBed.get(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getProducts', () => {
    it('should call http.get with expected URL', async(() => {
      let expectedUrl: string = 'https://localhost:5001/api/products';

      let spy: jasmine.Spy = spyOn(httpClient, "get");
      spy.and.returnValue(of({}));

      service.getProducts().subscribe();

      expect(spy.calls.argsFor(0)).toContain(expectedUrl);
    }));
  });

});
