import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SearchFormComponent } from './components/search-form/search-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
