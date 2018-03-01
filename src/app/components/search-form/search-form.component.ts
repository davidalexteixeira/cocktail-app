import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../../services/drink.service';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
 cocktail : String;

  constructor(private drinkService: DrinkService) { }

  ngOnInit() {
  }

  // submitForm(form) {
  //   console.log(form)
  //   this.drinkService.collectData(form);
  //   // this.drinkService.getDrinkById(form)
  // }
}
