import { Injectable } from '@angular/core';
import { HEROES } from './db/mock-heroes';
import { Observable, of } from 'rxjs';

import { Hero } from './models/hero';
import { MessageService } from './message.service';
import { HtmlParser } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
