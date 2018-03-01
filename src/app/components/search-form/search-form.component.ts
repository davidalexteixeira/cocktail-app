import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../../services/drink.service';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  constructor(private drinkService: DrinkService) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.drinkService.getDrinkById(form)
  }
}
