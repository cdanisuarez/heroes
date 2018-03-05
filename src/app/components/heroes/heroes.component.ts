import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/index';
import { Hero } from '../../interfaces/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  public heroes: Array<Hero> = [];

  constructor(private heroesService: HeroesService,
    private router: Router) {
  }
  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
  }
  seeHero(index: number) {
    this.router.navigate(['/hero', index]);
  }
}
