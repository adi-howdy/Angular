import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
//import { setTimeout } from 'timers';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Promise<Dish[]> {
    //return Promise.resolve(DISHES);
    return new Promise(resolve => {
      // setting delay of 2 sec
      setTimeout(() => resolve(DISHES), 2000);
    });
  }

  getDish(id: number): Promise<Dish> {
    return new Promise(resolve => {
      // setting delay of 2 sec
      setTimeout(() => resolve(DISHES.filter((dish) => (dish.id === id))[0]), 2000);
    });
    
    //return Promise.resolve(DISHES.filter((dish) => (dish.id === id))[0]);
    
  }

  getFeaturedDish(): Promise<Dish>{
    return new Promise(resolve => {
      // setting delay of 2 sec
      setTimeout(() => resolve(DISHES.filter((dish) => (dish.featured))[3]), 2000);
    });
    
    //return Promise.resolve(DISHES.filter((dish) => (dish.featured))[3]);
  }

}
