import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrinkService } from '../../services/drink.service';



@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  drinkId: string;
  drink: any;
  constructor(
    private drinkService: DrinkService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe((params) => {
      this.drinkId = String(params.drinkId)
      this.drinkService.getDrinkById(this.drinkId)
      .then((drink) => {
        console.log(drink)
        this.drink = drink
      })
  })

}
}
