import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';

import {HeroService} from './hero.service';
import {Router} from "@angular/router";


@Component({
  selector: 'my-heroes',
  moduleId: module.id,
  providers: [HeroService],
  styleUrls: ['heroes.style.css'],
  template: `
    
    <h2>My Heroes</h2>
      <ul class="heroes">
 
      <li *ngFor="let hero of heroes; trackBy: trackByHeroes" 
        (click)="onSelect(hero)">

        <span class="badge">{{hero.id}}</span>{{hero.name}}
      </li>
     </ul>
   
`
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroesService: HeroService,
              private router: Router) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroesService.getHeroes().then(
      heroes => this.heroes = heroes
    );
  }


  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  onSelect(hero: Hero) {
    this.router.navigate(['/hero', hero.id]);
  }

  trackByHeroes(index: number, hero: Hero) {
    return hero.id;
  }

}
