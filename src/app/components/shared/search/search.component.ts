import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../../../interfaces/hero.interface';
import { HeroesService } from '../../../services/index';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  public heroes: Array<Hero> = [];
  public term: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let hero = params['hero'];
      this.term = hero;
      this.heroes = this.heroesService.searchHero(hero);
    });
  }

}
