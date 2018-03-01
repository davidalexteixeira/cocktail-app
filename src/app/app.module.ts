import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { ResultsComponent } from './pages/results/results.component';
//Service
import { DrinkService } from './services/drink.service';



const routes: Routes = [
  { path: '',  component: HomepageComponent },
  { path: '/:productId', component: ResultsComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SearchFormComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DrinkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
