import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { IProduct } from 'src/app/interfaces/product.interface';
import list from 'src/app/endpoint/products.json';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.less']
})
export class ShowcaseComponent implements OnInit {

  urlProducts: string;
  showcase: any;

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.showcase = list;
  }

}
