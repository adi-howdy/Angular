import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
//import { setTimeout } from 'timers';


import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
//import 'rxjs/add/operator/toPromise';
//import 'rxjs/add/operator/delay';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(2000));
  }

  getDish(id: number): Observable<Dish> {
    return of(DISHES.filter((dish)=> (dish.id === id))[0]).pipe(delay(2000));
    
    //return Promise.resolve(DISHES.filter((dish) => (dish.id === id))[0]);
    
  }

  getFeaturedDish(): Observable<Dish>{
    return of(DISHES.filter((dish) => (dish.featured))[3]).pipe(delay(2000));
    
    
    //return Promise.resolve(DISHES.filter((dish) => (dish.featured))[3]);
  }

  getDishIds(): Observable<number[] | any>{
    return of(DISHES.map(dish => dish.id));
  }

}
