import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product.interface';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {

  @Input() product: any;

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    const prod = this.product;
    prod.favorite = this.getFavorite(prod.id) ? true : false;
    prod.added = this.getAdd(prod.id) ? true : false;
  }

  getFavorite(id: string): boolean {
    const nameString = `favorite${id}`;
    return this.localStorageService.get(nameString);
  }

  getAdd(id: string): boolean {
    const nameString = `add${id}`;
    return this.localStorageService.get(nameString);
  }
  
  callFavorite(id: string): void {
    const nameString = `favorite${id}`;
    if(this.localStorageService.get(nameString)) {
      this.localStorageService.remove(nameString);
      this.product.favorite = false;
      return
    }
    this.localStorageService.set(nameString, true)
    this.product.favorite = true;
  }

  callAdd(id: string): void {
    const nameString = `add${id}`;
    if(this.localStorageService.get(nameString)) {
      this.localStorageService.remove(nameString);
      this.product.added = false;
      return
    }
    this.localStorageService.set(nameString, true);
    this.product.added = true;
  }

}
