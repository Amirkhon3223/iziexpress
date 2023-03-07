import {Component, Input, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service"
import {ModalService} from "../../services/modal.service"
import {IProduct} from "../../models/product";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  @Input() product: IProduct
  loading = false
  // products$: Observable<IProduct[]>
  term = ''
  constructor(
    public productsService: ProductsService,
    public modalService: ModalService
  ) {
  }

  ngOnInit(): void {
    this.loading = true
    this.productsService.getAll().subscribe(() => {
      this.loading = false
    })
  }

}
