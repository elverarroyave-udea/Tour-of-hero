import { Component, OnInit } from '@angular/core';
import { Hero } from './model/hero';
//import { HEROES } from './model/mock-heroes';
import { HeroService } from '../../services/hero.service';
import { MessageService } from '../../services/message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) { }

  hero : Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes : Hero[] = [];
  selectedHero?:Hero;

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero):void{
    this.selectedHero = hero;
    this.messageService.add(`HeroService: Selected hero id=${hero.id}`);
  }

}
