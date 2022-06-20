import { Component, OnInit } from '@angular/core';
import { Hero } from './model/hero';
import { HEROES } from './model/mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  hero : Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes = HEROES;
  selectedHero?:Hero;

  ngOnInit(): void {
  }

  onSelect(hero: Hero):void{
    this.selectedHero = hero;
  }

}
