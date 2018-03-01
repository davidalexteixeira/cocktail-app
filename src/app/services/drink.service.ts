import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class DrinkService {
  private drink: any;
  private drinkChange: Subject<any> = new Subject();


  API_URL = 'http://localhost:3000';

  constructor(
    private httpClient: HttpClient
  ) { }
  
  getDrinkById(drinkId) {
    return this.httpClient.get(`${this.API_URL}/${drinkId}`)
    .toPromise()
  }

}
