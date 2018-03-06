import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*Routes*/
import { APP_ROUTING } from './app.routes';
/*Components*/
import { AppComponent } from './app.component';
import { NavbarComponent, HomeComponent, AboutComponent, HeroesComponent, HeroComponent, SearchComponent } from './components/index';
/*Services*/
import { HeroesService } from './services/heroes.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
