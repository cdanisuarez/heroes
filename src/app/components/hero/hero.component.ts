import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/index';
import { Hero } from '../../interfaces/index';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: []
})
export class HeroComponent implements OnInit {
  public hero: Hero;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private heroService: HeroesService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.hero = this.heroService.getHero(params['id']);
    });
  }

  ngOnInit() {
  }

  returnHeroes() {
    this.router.navigate(['/heroes']);
  }
}
