import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductResponse} from "../model/product/product.model";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  apiUrl: string = "https://dummyjson.com/products";
  constructor(private _http:HttpClient) {}

  getProducts(skip: number) {
    return this._http.get<ProductResponse>(this.apiUrl+`?limit=10&skip=${skip}`)
  }
}
