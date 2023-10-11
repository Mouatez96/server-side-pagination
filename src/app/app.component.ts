import {Component, OnInit} from '@angular/core';
import {Product} from "./model/product/product.model";
import {ServiceService} from "./services/service.service";
import {LazyLoadEvent} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'server-side-pagination';

  products!: Product[];
  totalRecords: number = 0;
  loading: boolean = true;

  constructor(private _service: ServiceService) {}

  loadProducts($event: LazyLoadEvent) {
    console.log($event)
    this.loading= true
    this._service.getProducts($event.first || 0).subscribe({
      next: (response) => {
        this.loading = false;
        this.products = response.products;
        this.totalRecords = response.total;
      }
    })
  }
}
