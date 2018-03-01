import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  productId: string;
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe((params) => {
      this.productId = String(params.productId)
      this.drinkService.getProductsBySearch(this.productId)
      .then((drink) => {
        console.log(drink)
        this.drink = drink
      })
  }

}
