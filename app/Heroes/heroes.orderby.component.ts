import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';

import {HeroService} from './hero.service';
import {Router} from "@angular/router";
import {OrderByPipe} from "../Pipes/hero.orderby.name.pipe";

@Component({
  selector: 'my-heroes',
  moduleId: module.id,
  providers: [HeroService],
  pipes:[OrderByPipe],
  styleUrls: ['heroes.style.css'],
  template: `
  <div>
      <h3>Order by (name, !name, id, !id)</h3>
      <input type="text" [(ngModel)] ="orderbyField" />
  </div>

   <h2>My Heroes - using orderBy</h2>

      <ul class="heroes">
      
        <!--<li *ngFor="let hero of heroes | orderby: '!name';  trackBy: trackByHeroes"-->
        <li *ngFor="let hero of heroes | orderby: orderbyField;  trackBy: trackByHeroes"
          (click)="onSelect(hero)">
        
          <span class="badge">{{hero.id}}</span>{{hero.name}}
        </li>
      </ul>
`
})
export class HeroesOrderbyComponent implements OnInit {

  heroes: Hero[];
  orderbyField: string;

  constructor(private heroesService: HeroService,
              private router: Router) {
  }

  ngOnInit() {
    this.orderbyField = 'name';

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
