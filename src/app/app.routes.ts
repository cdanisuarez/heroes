import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, HeroesComponent, AboutComponent, HeroComponent, SearchComponent } from './components/index';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'hero/:id', component: HeroComponent },
  { path: 'search/:hero', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
