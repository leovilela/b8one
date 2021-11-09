import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { IProduct } from 'src/app/interfaces/product.interface';


@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.less']
})
export class ShowcaseComponent implements OnInit {

  urlProducts: string;
  showcase: [IProduct];

  constructor(
    private httpService: HttpService
  ) { 
    this.urlProducts = "http://localhost:3000/products"
  }

  ngOnInit(): void {
    this.httpService.getRequest(this.urlProducts).subscribe((responseBody: [IProduct]): void => {
      this.showcase = responseBody;
    });
  }

}
