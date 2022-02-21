import { DurumInterface } from './durum.interface';
import { Observable, Subject, zip } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators'

@Component({
  selector: 'app-durum',
  templateUrl: './durum.component.html',
  styleUrls: ['./durum.component.scss']
})
export class DurumComponent implements OnInit {

  durum$: Observable<DurumInterface> = new Observable;

  bread = new Subject<string>();
  meat = new Subject<string>();
  souse = new Subject<string>();
  tomato = new Subject<string>();
  cabbage = new Subject<string>();

  breadCounter = 0;
  meatCounter = 0;
  souseCounter = 0;
  tomateCounter = 0;
  cabbageCounter = 0;

  constructor() { }

  ngOnInit(): void {

    this.durum$ = zip(
      this.bread.pipe(
        map(ingredient => `${ingredient} - ${++this.breadCounter}`),
        tap(ingredient => console.log(ingredient))
      ),
      this.meat.pipe(
        map(ingredient => `${ingredient} - ${++this.meatCounter}`),
        tap(ingredient => console.log(ingredient))
      ),
      this.souse.pipe(
        map(ingredient => `${ingredient} - ${++this.souseCounter}`),
        tap(ingredient => console.log(ingredient))
      ),
      this.tomato.pipe(
        map(ingredient => `${ingredient} - ${++this.tomateCounter}`),
        tap(ingredient => console.log(ingredient))
      ),
      this.cabbage.pipe(
        map(ingredient => `${ingredient} - ${++this.cabbageCounter}`),
        tap(ingredient => console.log(ingredient))
      )
    ).pipe(
      map((ingredients: string[]) => this.makeDurum(ingredients))
    );

    this.durum$.subscribe((durum) => console.log(durum));

  }

  makeDurum(ingredients: string[]): DurumInterface {
    const durum: DurumInterface = {
      price : 100,
      ingredients: ingredients
    }
    return durum;
  }
}
